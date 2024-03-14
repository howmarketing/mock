#!/bin/bash

# ANSI color escape codes
GREEN="\033[1;32m"
BLUE="\033[1;34m"
YELLOW="\033[1;33m"
MAGENTA="\033[1;35m"
CYAN="\033[1;36m"
GREEN2="\033[1;32m"
RESET="\033[0m"

generate_structure() {
    local path=$1
    local indent=$2

    for entry in "$path"/*; do
        local filename=$(basename "$entry")
        local output="$indent$filename"

        if [[ -d "$entry" && ! ("$filename" == "node_modules" || "$filename" == "dist" || "$filename" == "build" || "$entry" == "./.git") ]]; then
            local highlighted_output="${GREEN}$output/${RESET}"
            echo -e "${GREEN}$highlighted_output${RESET}"
            generate_structure "$entry" "$indent  │"
        else
            local extension="${filename##*.}"
            case "$extension" in
                sh)
                    local highlighted_output="${YELLOW}$output${RESET}"
                    ;;
                css)
                    local highlighted_output="${MAGENTA}$output${RESET}"
                    ;;
                jpg|jpeg|png|gif|bmp)
                    local highlighted_output="${MAGENTA}$output${RESET}"
                    ;;
                xls|xlsx|csv)
                    local highlighted_output="${GREEN2}$output${RESET}"
                    ;;
                *)
                    local highlighted_output="${CYAN}$output${RESET}"
                    ;;
            esac
            echo -e "$highlighted_output"
        fi
    done
}

# Prompt the user to enter the root directory path (default: current directory)
read -rp "Enter the root directory path (default: current directory): " root_directory

# Set the root directory path to the current directory if no input provided
root_directory=${root_directory:-$(pwd)}

# Check if the root directory exists
if [[ ! -d "$root_directory" ]]; then
    echo "Error: Root directory does not exist!"
    exit 1
fi

# Call the function to generate the structure
generate_structure "$root_directory" ""