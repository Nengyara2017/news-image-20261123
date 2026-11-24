# news-image-20261123

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![Rank](https://make.fun/badge/news-image-20261123/Nengyara2017/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![Reward](https://make.fun/badge/news-image-20261123/Nengyara2017/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image summing up the world news of Monday, 23 November 2026, laid out as an editorial front page — "The World in One Day". The lead story is Zelenskyy saying Ukraine sank the Russian corvette Merkury at Benghazi naval base in Libya with seven sea drones, destroying a Ka-27 helicopter aboard. The other five stories: COP31 ending in Antalya with no climate deal after the longest summit ever; Asian chip stocks sliding as the Kospi closed down 3.3% on doubts over AI spending; PM Andy Burnham hailing the UK–EU reset as a £17bn "win-win"; Virginia and Oregon becoming the first US states to sue SpaceX over Grok's sexualised images; and Bangladesh vowing to arrest former PM Sheikh Hasina if she returns from India. A "By the Numbers" strip closes the page with four key figures: 7, −3.3%, £17bn and 100,000.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This reconstructs `entry.png` (1024×1024) from `entry.png.b64` into the `out/` directory. Use Node v22 — if the system `node` is a different version, run it with `/home/hatch/workspace/node22/node-v22.23.5-linux-x64/bin/node` instead. The entry image itself is built from the self-contained `design.html` (no external resources).
