const express = require('express');
const app = express();
const path = require("path");

const fs = require('fs');
const ytdl = require('ytdl-core');

app.use('/', express.static(path.join(__dirname, '/html')));

app.get('/download/audio/:url', async (req, res) => {
        let url = 'https://youtube.com/video?v=' + req.params.url;
        await ytdl(url, {filter: "audioonly", highWaterMark: 1 << 28})
            .pipe(fs.createWriteStream(path.join(__dirname, '/download/audio.mp3'))).once('finish', () => {
                res.download(path.join(__dirname, `/download/audio.mp3`));
        })
})

app.listen("3000", () => {
  console.log("Server started!");
});
