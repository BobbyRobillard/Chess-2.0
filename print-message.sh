#!/bin/bash

PHRASES=("WAS GOOD" "I'm That Guy" "BUDDY I'm Him222")

RANDOM_INDEX=$(( RANDOM % ${#PHRASES[@]} ))
SELECTED_PHRASE=${PHRASES[$RANDOM_INDEX]}

figlet -w 200 -f starwars "$SELECTED_PHRASE"