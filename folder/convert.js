const fs = require("fs");

const INPUT = "song.lrc";
const OUTPUT = "output.json";

const START_YEAR = 1997;
const IMAGE = "/images/1997-1.jpg";

function parseTime(str) {
    const [m, s] = str.split(":");
    return Number(m) * 60 + Number(s);
}

const lines = fs
    .readFileSync(INPUT, "utf8")
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);

const result = [];

for (let i = 0; i < lines.length; i++) {

    const match = lines[i].match(/^\[(\d+:\d+\.\d+)\]\s*(.*)$/);

    if (!match) continue;

    const start = parseTime(match[1]);

    const text = match[2];

    let end;

    if (i < lines.length - 1) {
        const next = lines[i + 1].match(/^\[(\d+:\d+\.\d+)\]/);
        end = parseTime(next[1]);
    } else {
        end = start + 4;
    }

    const words = text.split(/\s+/);

    const duration = end - start;

    const step = duration / words.length;

    const wordObjects = words.map((word, index) => {

        const wordStart = +(start + step * index).toFixed(2);
        const wordEnd = +(start + step * (index + 1)).toFixed(2);

        return {
            text: word,
            start: wordStart,
            end: wordEnd,
        };
    });

    result.push({
        id: i + 1,
        startTime: +start.toFixed(2),
        endTime: +end.toFixed(2),
        year: START_YEAR + i,
        words: wordObjects,
        images: [IMAGE],
    });
}

fs.writeFileSync(
    OUTPUT,
    JSON.stringify(result, null, 2)
);

console.log("Done!");