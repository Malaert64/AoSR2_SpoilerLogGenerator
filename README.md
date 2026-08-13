# AoSR2_SpoilerLogGenerator
### Human-readable spoiler log generator for Fuse's Castlevania: Aria of Sorrow Randomizer.
Fuse's [Castlevania: Aria of Sorrow Randomizer 2](https://aosrando.surge.sh/) natively lacks the ability to generate fully-human-readable spoiler logs for rolled seeds. It does, however, produce browser console output for logging/debug purposes. The data output to the browser console when clicking the `Randomize` button on Fuse's randomizer can be saved to a `.txt` file and uploaded to [this project's webpage](https://malaert64.github.io/AoSR2_SpoilerLogGenerator/), which will then perform a translation of the information in the logs and output a significantly more human-readable spoiler log `.txt` file for the given seed.

The data values used in this project to derive item names and locations were pulled from [the codebase for the original Aria of Sorrow Randomizer](https://github.com/abyssonym/aos_rando) by Abyssonym, which Fuse's revision is built upon.

The actual locations of items within Aria, corresponding to the identifiers in the AoSR codebase, still had to be derived mostly by hand for this project. Shoutouts to LagoLunatic's [DSVEdit](https://github.com/LagoLunatic/DSVEdit) for making that process significantly faster, and shoutouts to Berix for helping directly.

## What this does, for a given seed:
* Compiles all the area transitions.
* Compiles the locations of all the movement progression items.
* Compiles the locations of all the ancient books.
* Translates and organizes all the placed equipment and consumables. 
* Puts all of that in a `.txt` file and downloads it to your computer.

## What this does not do, for a given seed:
* Tell you what the objectives written in the ancient books are.
* Tell you how bosses have been randomized.
* Tell you how enemies have been randomized.
* Tell you where soul canisters have been placed.

Unfortunately the logs for AoSR2 and the reference tables in AoSR1 both lack key information required to deliver the information in that second list (particularly which numbers in the logs refer to which enemies/bosses, and any placement messages for soul canisters).

*If you encounter any bugs with this program, feel free to open a ticket.*
