export let global_stats = { rank: '', score: '', chall_done:'', compromissions: '' }

export const light_svg_props = {
    background : '#fff',
    bar_primary : '#f1f1f1',
    bar_secondry : '#91B302',
    text_primary : '#000',
    text_secondry: '#000'
}

export const dark_svg_props = {
    background : '#000',
    bar_primary : '#2A3609',
    bar_secondry : '#91B302',
    text_primary : '#91B302',
    text_secondry: '#68B486'
}

export const midnight_svg_props = {
    background: '#1e1b4b',
    bar_primary: '#2e1065',
    bar_secondry: '#6d28d9',
    text_primary: '#a855f7',
    text_secondry: '#d8b4fe'
}

export const punk_svg_props ={
    background: '#500724',
    bar_primary: '#881337',
    bar_secondry: '#db2777',
    text_primary: '#db2777',
    text_secondry: '#f9a8d4'
}

export const weedy_svg_props ={
    background: '#022c22',
    bar_primary: '#365314',
    bar_secondry: '#65a30d',
    text_primary: '#84cc16',
    text_secondry: '#bef264'
}

export const astral_svg_props = {
    background : '#000000',
    bar_primary : '#340000',
    bar_secondry : '#DF0000',
    text_primary : '#DF0000',
    text_secondry: '#ac0000'
}


const svg_animation = `
<style>
    @keyframes slidein {
        from { transform: scaleX(0);transform-origin: 50px }
        to   { transform: scaleX(1);transform-origin: 50px }
    }

    @keyframes fadeInAnimation {
        from { opacity: 0 }
        to { opacity: 1 }
    }
</style>
`

export default function Classic_template( vectors, props, global_stats ){

    if ( global_stats.rank !== '' ){
        return `
            <svg width="380" height="580" style="background-color:${props.background}; border:1px solid ${props.bar_primary}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${svg_animation}
                <text fill="${props.text_primary}" font-size="18" font-family="Verdana" x="15" y="30"> Root-me.org Stats </text>
                <text fill="${props.text_secondry}" font-size="10" font-family="Verdana" x="15" y="45"> Hacking and Information Security learning platform </text>
                ${vectors}

                <line x1="0" y1="515" x2="380" y2="515" stroke="${props.bar_primary}" stroke-width="2"/>
                <text fill="${props.text_primary}" font-size="18" font-family="Verdana" x="10" y="545"> ${global_stats.rank} </text>
                <text fill="${props.text_secondry}" font-size="10" font-family="Verdana" x="10" y="560"> Rank </text>

                <text fill="${props.text_primary}" font-size="18" font-family="Verdana" x="110" y="545"> ${global_stats.score} </text>
                <text fill="${props.text_secondry}" font-size="10" font-family="Verdana" x="110" y="560"> Score </text>

                <text fill="${props.text_primary}" font-size="18" font-family="Verdana" x="210" y="545"> ${global_stats.chall_done} </text>
                <text fill="${props.text_secondry}" font-size="10" font-family="Verdana" x="210" y="560"> Flagged </text>

                <text fill="${props.text_primary}" font-size="18" font-family="Verdana" x="310" y="545"> ${global_stats.compromissions} </text>
                <text fill="${props.text_secondry}" font-size="10" font-family="Verdana" x="310" y="560"> Comp </text>
            </svg>
        `
    }else{
        return `
            <svg width="380" height="510" style="background-color:${props.background}; border:1px solid ${props.bar_primary}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                ${svg_animation}
                <text fill="${props.text_primary}" font-size="18" font-family="Verdana" x="15" y="30"> Root-me.org Stats </text>
                <text fill="${props.text_secondry}" font-size="10" font-family="Verdana" x="15" y="45"> Hacking and Information Security learning platform </text>
                ${vectors}
            </svg>
        `
    }
}