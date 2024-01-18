## 📊 Root-me Readme Stats
![template](https://i.ibb.co/Fncvxvb/rm-stats-classic-template.png)
### 👀 Overview
Root-me readme stats is a Sveltekit app that allows users to display their Root-me.org stats on their GitHub profiles. Your Root-me.org profile stats are dynamically fetched and displayed on your GitHub profile, ensuring they are always up-to-date. Easily customize the appearance and layout to match your GitHub profile style.

###  Usage 👉
To display your Root-me.org stats on your GitHub profile, follow these steps:

1. **Include the following markdown code in your GitHub profile readme:**
   ```md
   ![Root-me-stats](https://root-me-diff.vercel.app/rm-gh?nickname=__your_nickname__)
   ```
   *Replace `__your_nickname__` with your actual Root-me.org username.*


2. **Optional Parameters:**
   - `gstats` (Optional): Specify whether to display general statistics. Options are "show" or "hidden". *Default: "hidden"*.
   - `style` (Optional): Choose the display style. Options are 'dark', 'light', 'midnight', 'punk'... *Default: "light"*.



#### 🎨 Templates
|   Style   |                     Colors                        |  Author  | Preview   |
|-----------|---------------------------------------------------|----------|-----------|
|  Light    | `#ffffff`,`#f1f1f1`,`#91B302`,`#000000`           |  Dz-root | [▶️ light](https://root-me-diff.vercel.app/rm-gh?nickname=dz-root&style=light&gstats=show)|
|  Dark     | `#000000`,`#2A3609`,`#91B302`,`#68B486`           |  Dz-root | [▶️ dark](https://root-me-diff.vercel.app/rm-gh?nickname=dz-root&style=dark&gstats=show)|
|  Midnight | `#1e1b4b`,`#2e1065`,`#6d28d9`,`#a855f7`,`#d8b4fe` |  Dz-root | [▶️ midnight](https://root-me-diff.vercel.app/rm-gh?nickname=dz-root&style=midnight&gstats=show)|
|  Punk     | `#500724`,`#881337`,`#db2777`,`#db2777`,`#f9a8d4` |  Dz-root | [▶️ punk](https://root-me-diff.vercel.app/rm-gh?nickname=dz-root&style=punk&gstats=show)|
|  Weedy    | `#022c22`,`#365314`,`#65a30d`,`#84cc16`,`#bef264` |  Dz-root | [▶️ weedy](https://root-me-diff.vercel.app/rm-gh?nickname=dz-root&style=weedy&gstats=show)|
|  Astral   | `#000000`,`#340000`,`#DF0000`,`#ac0000`           |  Astral  | [▶️ astral](https://root-me-diff.vercel.app/rm-gh?nickname=dz-root&style=astral&gstats=show)| 



#### ✨ Examples
- Basic usage:
```md
![Root-me-stats](https://root-me-diff.vercel.app/rm-gh?nickname=__Your_Root-me_nickname__)
  ```
```html
 <img src="https://root-me-diff.vercel.app/rm-gh?nickname=__Your_Root-me_nickname__">
```

- Customized with optional parameters:
```md
![Root-me-stats](https://root-me-diff.vercel.app/rm-gh?nickname=__Your_Root-me_nickname__&gstats=show&style=dark)
```
```html
 <img src="https://root-me-diff.vercel.app/rm-gh?nickname=__Your_Root-me_nickname__&gstats=show&style=dark">
```

> [!NOTE]
> - Ensure your Root-me.org username is correctly provided in the `nickname` parameter.
> - Experiment with optional parameters to customize the display according to your preferences.
> - Your Root-me stat-card image is cached for 1 day

> [!TIP]
> You can clone this repo and host it in your own server.
> To run it localy:
> * `git clone https://github.com/dz-root/Rootme-readme-stats.git`
> * `npm install` 
> * `npm run dev`

---

### Contributions:
Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.


### Credits:
This script is created by [Dz-root](https://www.root-me.org/dz-root), inspired by a passion for cybersecurity challenges and a desire to share achievements with the GitHub community.
Special regards for:
* Alex [Alex]()
* Astral [Astral](https://www.root-me.org/astral-728472)
* Almandin [Almandin](https://www.root-me.org/Almandin)
* Evix [Evix](https://www.root-me.org/Evix)
* Gravis_ [Gravis_](https://www.root-me.org/Gravis_)
* Leirn [Leirn](https://www.root-me.org/leirn)
* Nu1t [Nu1t](https://www.root-me.org/Nu1t)
* Numb3rs [Numb3rs](https://www.root-me.org/Numb3rs)
* Oiy [Oiy](https://www.root-me.org/Oiy)
* Opruualla [Opruualla](https://www.root-me.org/Opruualla)
* raltheo  [raltheo](https://www.root-me.org/raltheo)
* Sgnihtnem [Sgnihtnem]()
* ThePhilosopher [ThePhilosopher](https://www.root-me.org/ThePhilosopher)
* Unactive [Unactive](https://www.root-me.org/Unactive)
* zSarix [zSarix](https://www.root-me.org/zSarix-502944)


