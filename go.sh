#!/bin/sh
imagesnap -t 1
node rename.sh
ffmpeg -y -f image2 -i snapshot-%04d.jpg -r 25 output.mov
open output.mov