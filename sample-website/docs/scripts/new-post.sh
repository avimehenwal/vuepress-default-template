#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 27 - Aug - 2020
# PURPOSE     : Generate new files in blogger format
# FILENAME    : newfile.sh
#
# touch new files with dates appended.
# 2020-07-22-new-blog-entry.md
#
# USAGE
# yarn new some-blog

# echo $(figlet "new post")
USAGE=$(cat << END
  Kindly provide new blog post name as a single argument
  Eg: yarn new my-awesome-blog-post-name
END
)

ARCHETYPE=$(cat << END
---\n
title: $1\n
date: $(date +"%Y-%m-%d")\n
tags:\n
- anime\n
featuredimg: https://picsum.photos/800/500.webp\n
author: avimehenwal\n
summary: $1\n
---\n
\n
# $1\n
\n
\n
<Footer />\n
END
)

if [ $# -eq 1 ]
  then
    DESTINATION="$(pwd)/src/posts/"
    FILE="$DESTINATION$(date +"%Y-%m-%d-")$1.md"
    touch $FILE
    if [ $? -eq 0 ]
    then
      echo "NEW-POST-CREATED: $FILE"
      echo -e $ARCHETYPE >> $FILE
    else
      echo "ERROR: $?"
    fi
  else
    echo $USAGE
    exit 1
fi


# END