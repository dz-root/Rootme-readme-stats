/** @type {import('./$types').RequestHandler} */

import axios from 'axios'
import cheerio from 'cheerio'
import { redirect } from '@sveltejs/kit'
import {category_icons} from '$lib/utils/SvgExports'
import Classic_template, { 
    light_svg_props as light, 
    dark_svg_props as dark, 
    midnight_svg_props as midnight, 
    punk_svg_props as punk, 
    weedy_svg_props as weedy, 
    astral_svg_props as astral,
    global_stats
} from '$lib/stat-card-template/Classic'

export async function GET( { url, setHeaders } ) {

    let stats_by_category = []
    let global_stat_badges = { ...global_stats }
    let svg_props = { ...light }
    let vectors = ''
    
    /* Get request params */
    const user  = await url.searchParams.get('nickname')
    const style = await url.searchParams.get('style')
    const gstats = await url.searchParams.get('gstats')
    
    /* Set response headers */ 
    setHeaders({
        'Content-type' : 'image/svg+xml',
        'cache-control': 'max-age=86400', /*24h*/
	})
    
    if( user && user !== '' ){
        
        let bars = '', y_offset = 85, yt_offset = 76;

        ( style === 'dark' ) ?  svg_props = {...dark} : 
        ( style === 'midnight' ) ?  svg_props = {...midnight} : 
        ( style === 'punk' ) ?  svg_props = {...punk} : 
        ( style === 'weedy' ) ?  svg_props = {...weedy} : 
        ( style === 'astral' ) ?  svg_props = {...astral} :
        /**
         * Add more template here
         * ( style === '__your_template__' ) ?  svg_props = {...__your_template__}
         */
        svg_props = {...light};
        
       
        /* Fetch data */
        const fetch_profile = await axios.get(`https://www.root-me.org/${user}?inc=score&lang=en`)
        .then(response => response.data)
        .catch( e => redirect(307, '/') )
        
        /* Parse data */
        const ch = cheerio.load(fetch_profile)
        const global_stat = ch("h3")
        const rank= global_stat.eq(3).text().trim().split(" ").pop()
        const score = global_stat.eq(4).text().trim().split(" ").pop()
        const chall_done = global_stat.eq(5).text().trim().split(" ").pop()
        const compromissions = global_stat.eq(6).text().trim().split(" ").pop()
        const percentage = ch("h4>div>span").text().trim().split('%')
        const categories = ch("h4>a");
        
        (  gstats && gstats === 'show' ) ?  global_stat_badges = {rank:rank, score:score, chall_done:chall_done, compromissions:compromissions} : global_stat_badges = {...global_stat_badges} ;

        /* Build the SVG stat bars */
        categories.each((i, category) => {
            stats_by_category.push({ category: category.attribs.href.split("/")[2],  percentage: percentage[i]})
            let category_name = category.attribs.href.split("/")[2].toLowerCase().replace('-', '')
            let icon = Object.getOwnPropertyDescriptor(category_icons, category_name);
  
            
            bars += `
            <g style="animation:fadeInAnimation ${i/5}s ease-in-out forwards;">
                <svg xmlns="http://www.w3.org/2000/svg" x="15" y="${y_offset-15}" width="25" height="25">
                   ${icon.value}
                </svg>
                <text fill="${svg_props.text_secondry}" font-size="12" font-family="Verdana" x="50" y="${yt_offset}"> 
                    ${category.attribs.href.split("/")[2]} - ${percentage[i]}%
                </text>
                <rect x="50" y="${y_offset}" rx="2" ry="2" width="315" height="10" style="fill:${svg_props.bar_primary}" />
                <rect x="50" y="${y_offset}" rx="2" ry="2" width="${parseInt( percentage[i]*315 )/100}" height="10" style="fill:${svg_props.bar_secondry}; animation: 0.8s linear 0s slidein; " />
            </g>
            `

            vectors = bars
            y_offset += 40
            yt_offset+= 40
        })

    } else {
        redirect(307, '/stat-card')
    }

    /* Render the SVG */
	return new Response( Classic_template( vectors, svg_props, global_stat_badges ) )

}