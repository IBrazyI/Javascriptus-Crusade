/*Troops*/
const faction = {
    spacemarines: "Spacemarines are the genetically enhanced super soldiers of the Imperium of man. Feared through the galaxy and one of humanity's greatest defenders, they know no fear wear thick ceramite armour that makes them almost invulnerable to small arms fire.",
    admech: "The Adeptus Mechanicus is one of the most powerful organisations in the Imperium. More machine than human, they field large number machine enhanced troops with technologically advanced weapons while their gigantic warmachines stalk the battlefield.",

    guard: "The Guard forms the very backbone of the Imperium; without it, Mankind would surely perish. Fighting neither with the advantages of genetic enhancement or the most powerful personal weaponry, the Guard possesses the courage and the manpower to face and annihilate the enemies of the Emperor across the galaxy.",
}/*Enemies*/
const enemies = {
    orks: "Orks are a warlike, crude, and highly aggressive green-skinned Xenos race. Although their society is entirely primitive and brutal, the Ork race is also the most successful species in the whole Galaxy, outnumbering possibly every other race. However, due to their aggressive and warlike nature, warring as much between themselves as against other races.",
    chaos: "The Chaos Space Marines were once loyal, superhuman warriors of the Emperor, but turned their backs on the Master of Mankind when his foremost son and Primarch, the Warmaster Horus, was corrupted by the Chaos Gods. Now, as champions of the Dark Gods infused with the infernal power of the warp, they seek only to destroy the very empire they once fought to build more than 10 thousand years ago.",
    tyranids: "The Tyranids are an extragalactic alien race, whose sole purpose is the consumption of all forms of genetic and biological material in order to evolve and reproduce. Every function is carried out by living, engineered creatures, each of which collectively forms the Hive Fleet, directed by a single Hive Mind.The Tyranids are seen as one of the gravest threats to the entire Galaxy.",
}
/* Talking Head */
let talkingHead = document.querySelector(".talking-head-box");
let talkingHeadTxt = document.querySelector("#talking-head-text");
let talkingHeadBtn = document.querySelector("#talking-head-btn");
let talkingHeadGreet = "Greetings Commander... you have been assigned to the defence of the planet OMACRON DONACUS 32... you will need to choose which of the Imperiums armies will command to defend it...";
let talkingHeadGreetTwo = "Unfortunately we only have the resources to deploy one of the imperial factions... choose wisely not all forces are created equal...";
let talkingHeadEnemy = "Now you have selected your army we need to decide what enemy we shall face... all are of equal importance but some may be harder to defeat than others...";
let talkingHeadGame = "Welcome to the 'Battle' screen Commander... here you can see the enemies actions and what tactics are available to counter them...";
let talkingHeadGameTwo = "Be aware... once you decide a plan of action it could have dire consequences... For the Emperor!...";
let forcesIntro = "Welcome to the 'Forces' screen Commander...here you can find information on both the factions you command and the enemies you will face..."

/* Game Objects */
let question = document.querySelector(".question-box");
let battleImage = document.querySelector(".question-image");
let answerOne = document.querySelector(".answer-one");
let answerTwo = document.querySelector(".answer-two");
let answerThree = document.querySelector(".answer-three");
let i = 0;
let spaceMarineHealth = 125;
let adMechHealth = 100;
let guardHealth = 75;
let defence = 0;

let spaceMarinesVsOrksQuestions = [
    {
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?',
        questionPower: 20,
        choiceOne: 'Send a small scouting force to confirm the reports.',
        choiceOnePower: 10,
        choiceTwo: 'Begin to fortify larger settlements on the planet and brace for an attack.',
        choiceTwoPower: 15,
        choiceThree: 'Organise rapid strike forces to preemptively attack the Orks before their numbers can grow.', 
        choiceThreePower: 20,
    },

    {
        question: 'The Orks numbers have grown considerably and they are attacking fringe settlements. How do we handle this menace?',
        questionPower: 40,
        choiceOne: 'Strike them hard and fast eliminating their leaders.',
        choiceOnePower: 30,
        choiceTwo: 'Pull back all civilians and our forces to the planetary capital.',
        choiceTwoPower: 20,
        choiceThree: 'Organise a defence in depth, try to hold and defend the settlements.',
        choiceThreePower: 10,
    },

    { 
        question: 'The Orks have pushed us back and are now attacking the planetary capital with all their might.',
        questionPower: 60, 
        choiceOne: 'Counter attack with armoured vehicles and fast attack troops.', 
        choiceOnePower: 30, 
        choiceTwo: 'Dig in the troops and deploy our heavy weapons teams to hold back the tide.', 
        choiceTwoPower: 50, 
        choiceThree: 'Bolster the line at key points using Dreadnoughts.', 
        choiceThreePower: 40, 
    },

    { 
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?', 
        questionPower: 80, 
        choiceOne: 'Engage them in melee to slow them down and allow us to reform the line with our reserves.', 
        choiceOnePower: 50, 
        choiceTwo: "Pull back inside the city and allow the city's automated defences to thin the horde.", 
        choiceTwoPower: 60, 
        choiceThree: 'Send our initiates to plug the gaps and prove themselves.', 
        choiceThreePower: 30, 
    },

    {   question: 'The Ork Warboss has been seen on the battlefield leading his horde. Eliminating him will cause the Orks to scatter and end the battle.', 
        questionPower: 100, 
        choiceOne: 'Teleport our elite terminators directly into the Warbosses path and destroy him.', 
        choiceOnePower: 80, 
        choiceTwo: 'Send infiltrators to find and eliminate him at range.', 
        choiceTwoPower: 50, 
        choiceThree: 'Obliterate him with a massive bombardment from our ships in orbit.', 
        choiceThreePower: 60, 
    }]

let adMechVsOrksQuestions = [
    { 
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?', 
        questionPower: 20, 
        choiceOne: 'Study past conflicts with the Orks and determine what strategy would be best used to defeat them', 
        choiceOnePower: 20, 
        choiceTwo: 'Ignore the Orks the goal of gathering Knowledge is much more important', 
        choiceTwoPower: 5, 
        choiceThree: 'Deploy Skitarii rangers to determine whether the reports are true ', 
        choiceThreePower: 10, 
    },

    { 
        question: 'The Orks numbers have grown considerably and they are attacking fringe settlements. How do we handle this menace?', 
        questionPower: 40, 
        choiceOne: 'Fully mobilise all ground forces simultaneously attack the Orks and building defences around the larger settlements.', 
        choiceOnePower: 30, 
        choiceTwo: 'Deploy the Legio Cybernetica and have their automatons destroy the attacking Orks.', 
        choiceTwoPower: 20, 
        choiceThree: 'Send out the bombers and ironstriders on hit and run attacks while the rest of the troops organise the defence.', 
        choiceThreePower: 30, 
    },

    { 
        question: 'The Orks have pushed us back and are now attacking the planetary capital with all their might.', 
        questionPower: 60, 
        choiceOne: 'Give local command to the Skitarii captains they will best know how to organise the troops', 
        choiceOnePower: 40, 
        choiceTwo: 'Use your tanks and other heavy vehicles to whittle down their numbers as your Skitarii fall back.', 
        choiceTwoPower: 30, 
        choiceThree: 'Send in bombers and other air assets to strafe their forces with bombs. ', 
        choiceThreePower: 30, 
    },

    { 
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?', 
        questionPower: 80, 
        choiceOne: 'Send in the Legio Titanica Titans to obliterate them.', 
        choiceOnePower: 80, 
        choiceTwo: 'Send in the Vanguard reserves destroy them with radiation', 
        choiceTwoPower: 50, 
        choiceThree: 'Set up crossfires using Rangers and their sniper rifles', 
        choiceThreePower: 40, 
    },

    { 
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Eliminating him will cause the Orks to scatter and end the battle.', 
        questionPower: 100, 
        choiceOne: 'Have the rustalkers infiltrate and eliminate him.', 
        choiceOnePower: 70, 
        choiceTwo: 'Launch a spearhead into the enemy lines with the imperial knights aim right for the Warboss.', 
        choiceTwoPower: 80, 
        choiceThree: 'Launch a desperate counter attack with all ground forces you have to spare.', 
        choiceThreePower: 50, 
    }]

let guardVsOrksQuestions = [
    { 
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?', 
        questionPower: 20, 
        choiceOne: 'Start conscripting the local population all people will be needed to hold back the Orks.', 
        choiceOnePower: 10, 
        choiceTwo: 'Call in support from other planets in the region but they may not get here in time', 
        choiceTwoPower: 5, 
        choiceThree: 'Amass your troops close to the planetary capital.', 
        choiceThreePower: 10, 
    },

    { 
        question: 'The Orks numbers have grown considerably and they are attacking fringe settlements. How do we handle this menace?', 
        questionPower: 40, 
        choiceOne: 'Hold each settlement to the last man.', 
        choiceOnePower: 10, 
        choiceTwo: 'Use all air power to destroy the Orks it is already too late to save those in the settlements', 
        choiceTwoPower: 15, 
        choiceThree: 'Smash the attacking forces using our tanks to blunt their advance.', 
        choiceThreePower: 20, 
    },

    { 
        question: 'The Orks have pushed us back and are now attacking the planetary capital with all their might.', 
        questionPower: 60, 
        choiceOne: 'Use artillery and gun emplacements to blunt any advance.', 
        choiceOnePower: 40, 
        choiceTwo: 'Amass troops at vital location with numbers we shall hold them off.', 
        choiceTwoPower: 30, 
        choiceThree: 'Hold the outside of the city at all costs, many will die in the trenches.', 
        choiceThreePower: 20, 
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?', 
        questionPower: 80, 
        choiceOne: 'An armoured counter attack with our remaining tanks will thrust them out of the city', 
        choiceOnePower: 70, 
        choiceTwo: "Deploy our elite storm troops the Orks won't know what hit them.",        
        choiceTwoPower: 60,        
        choiceThree: 'Shoot the men that are running away, the others will hold firm.',        
        choiceThreePower: 80,    
    },

    { 
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Eliminating him will cause the Orks to scatter and end the battle.', 
        questionPower: 100, 
        choiceOne: 'Charge the Warboss with our mutant Ogryn their massive guns and strength will wear him down.', 
        choiceOnePower: 75, 
        choiceTwo: 'Annihilate there Warbosses location with all artillery batteries, nothing would be able to withstand that.', 
        choiceTwoPower: 90, 
        choiceThree: 'Lead the charge yourself, our faith in the emperor will see us through this.', 
        choiceThreePower: 60, 
    }]

let spaceMarinesVsChaosQuestions = [
    { 
        question: 'On arrival to the planetary capital it is obvious something is not right. The populace are restless, many strange icons and idols adore the buildings in the lower part of the city. Bands of hooded men are roaming the streets chanting foul incantations and there have been clashes with local defence forces.', 
        questionPower: 20, 
        choiceOne: 'Ignore these pests they are a concern of the defence forces not the Spacemarines.', 
        choiceOnePower: 0, 
        choiceTwo: 'Work with the local troops to increase patrols and stap out any signs of heresy.', 
        choiceTwoPower: 10, 
        choiceThree: 'Purge all icons and idols and kill anyone who gets in our way, this heresy will not stand!', 
        choiceThreePower: 5, 
    },

    { 
        question: 'The clashes have become full blown riots, whole sections of the city have been barricaded and heads of local leaders adorn spikes.', 
        questionPower: 40, 
        choiceOne: 'Annihilate all those who oppose you with fire, destroy the lower sections of the city and cleans them of the heretics.', 
        choiceOnePower: 20, 
        choiceTwo: 'Clear out the barricades and eliminate the cultist leaders, they will not stand a chance.', 
        choiceTwoPower: 25, 
        choiceThree: 'Seal off the overrun areas of the city and secure the outer defences, these disturbances can only mean one thing.', 
        choiceThreePower: 20, 
    },

    { 
        question: 'A massive Chaos Spacemarine fleet has arrived in orbit, our fleet has been destroyed and their assault craft are rapidly approaching.', 
        questionPower: 60, 
        choiceOne: 'Focus on the assault craft with anti aircraft guns, an allied fleet has been sent to aid you but its arrival date is unknown', 
        choiceOnePower: 40, 
        choiceTwo: 'Spend time reinforcing the city, we will not fall without a fight.', 
        choiceTwoPower: 30, 
        choiceThree: 'Organise your troops into assault teams and cut down the enemy while they are landing.', 
        choiceThreePower: 40, 
    },

    { 
        question: 'Daemons attack the city from the inside while the Chaos Spacemarines are assaulting the walls which will not hold for long.', 
        questionPower: 80, 
        choiceOne: 'Locate the source of the daemons and destroy it, the longer we leave the rift open more daemons will come.', 
        choiceOnePower: 50, 
        choiceTwo: 'Leave the daemons to the defence force, there Chaos Spacemarines are the bigger threat without the outer defences all is lost.', 
        choiceTwoPower: 50, 
        choiceThree: 'Split your forces, there is no choice if we let our defences lapse anywhere we will surely fall.', 
        choiceThreePower: 60, 
    },

    { 
        question: 'The Chaos Spacemarines have broken through our defences but their numbers are low our final stand will determine the outcome of the battle!', 
        questionPower: 100, 
        choiceOne: 'Form a final offensive line... there is still a chance the relief fleet will come.', 
        choiceOnePower: 70, 
        choiceTwo: 'Lead a final attack and eliminate as many Chaos Spacemarines and Daemons as you can, make them pay for attacking the Imperium', 
        choiceTwoPower: 80, 
        choiceThree: 'Pull back our troops and leave the planet to its fate, there may still be a space vessel thats working somewhere.', 
        choiceThreePower: 60, 
    }]

let adMechVsChaosQuestions = [
    {
        question: 'On arrival to the planetary capital it is obvious something is not right. The populace are restless, many strange icons and idols adore the buildings in the lower part of the city. Bands of hooded men are roaming the streets chanting foul incantations and there have been clashes with local defence forces.', 
        questionPower: 20, 
        choiceOne: 'Bless the areas with scared oils and incense that will purge any corruption.', 
        choiceOnePower: 5, 
        choiceTwo: 'Analyse past occurrences of this kind of behavior from your data banks to see if anything like this has happened before and what best can be done to stop it.', 
        choiceTwoPower: 15, 
        choiceThree: 'Deploy automated probes and senteries to scour the area, sending troops would be a waste of time and distract them from the omnissias work.', 
        choiceThreePower: 10, 
    },

    { 
        question: 'The clashes have become full blown riots, whole sections of the city have been barricaded and heads of local leaders adorn spikes.', 
        questionPower: 40, 
        choiceOne: 'Attempt to capture a few of the rioters and have our biologists analyse them and see what could be affecting these people.', 
        choiceOnePower: 10, 
        choiceTwo: 'Deploy some of your skitarii to the area to clear out resistance, the production facilities of this world must be maintained', 
        choiceTwoPower: 20, 
        choiceThree: 'Send in drones and gun servitors to obliterate any and all rioters, the Mechanicum will not stand base humans defying the Omnisiaas will.', 
        choiceThreePower: 20, 
    },

    { 
        question: 'A massive Chaos Spacemarine fleet has arrived in orbit, our fleet has been destroyed and their assault craft are rapidly approaching.', 
        questionPower: 60, 
        choiceOne: 'Leave the outer defences there will not be enough time to send troops to defend them. We must prioritise the forge complexes ', 
        choiceOnePower: 40, 
        choiceTwo: 'Focus all servitors and heavy on the approaching assault craft. They will not be able to assault the city if they cannot even land on the planet.', 
        choiceTwoPower: 50, 
        choiceThree: "Begin securing the valuable technology in the city's forges, as it cannot be replicated.It is more important than the civilian population.", 
        choiceThreePower: 30, 
    },

    { 
        question: 'Daemons attack the city from the inside while the Chaos Spacemarines are assaulting the walls which will not hold for long.', 
        questionPower: 80, 
        choiceOne: 'Destroy the lower areas of the city, maybe the destruction will stem the flow of daemons then we can focus on the main Chaos Spacemarine attack.', 
        choiceOnePower: 50, 
        choiceTwo: 'Send small strike teams to the lower city, try and close the tears in reality that are allowing the daemons to attack us from the inside.', 
        choiceTwoPower: 60, 
        choiceThree: 'Take control of the skitarii defending the walls, your thousands of years of experience will help to turn the fight in our favor.', 
        choiceThreePower: 60, 
    },

    { 
        question: 'The Chaos Spacemarines have broken through our defences but their numbers are low our final stand will determine the outcome of the battle!', 
        questionPower: 100, 
        choiceOne: 'Trigger the bombs located all around the city, the heretics will not control the knowledge and forges of this world.', 
        choiceOnePower: 70, 
        choiceTwo: 'Fight for every inch of ground, our weapons are superior and we follow the Omnisiaas will.', 
        choiceTwoPower: 60, 
        choiceThree: 'Send in a final counter attack with our remaining titans and war machines, they will not stand a chance', 
        choiceThreePower: 90, 
    }]

let guardVsChaosQuestions = [
    { 
        question: 'On arrival to the planetary capital it is obvious something is not right. The populace are restless, many strange icons and idols adore the buildings in the lower part of the city. Bands of hooded men are roaming the streets chanting foul incantations and there have been clashes with local defence forces.', 
        questionPower: 20, 
        choiceOne: 'Integrate your troops with the local defence forces and increase number of patrols and shakedowns of these areas.', 
        choiceOnePower: 10, 
        choiceTwo: 'Sanction local priests to enter the areas, their sermons and religious fervor shall settle the people.',
        choiceTwoPower: 10, 
        choiceThree: 'Keep your troops out of these "corrupted" areas and make sure key personal and facilities are defended', 
        choiceThreePower: 5, 
    },

    { 
        question: 'The clashes have become full blown riots, whole sections of the city have been barricaded and heads of local leaders adorn spikes.', 
        questionPower: 40, 
        choiceOne: 'Commit your forces to end the riots, break into the sealed areas of the city. Traitors to the Imperium will not be allowed to survive.', 
        choiceOnePower: 20, 
        choiceTwo: 'Seal off those areas of the city, we cannot spare the troops to take these rebels down. Let them destroy themselves. None will leave the area.', 
        choiceTwoPower: 25, 
        choiceThree: 'Destroy the non compliant areas of the city, we do not have the resources to spare to deal with this issue conventionally.', 
        choiceThreePower: 15, 
    },

    {   
        question: 'A massive Chaos Spacemarine fleet has arrived in orbit, our fleet has been destroyed and their assault craft are rapidly approaching.', 
        questionPower: 60, 
        choiceOne: 'Focus all heavy weapons and gun batteries onto the assault craft, this will buy us time to muster the troops and set up strategic defences.', 
        choiceOnePower: 40, 
        choiceTwo: 'Launch our own in atmosphere fighters and gunships to thin their numbers, so all heavy weapons emplacements can be used to defend the walls.', 
        choiceTwoPower: 50, 
        choiceThree: 'Amass troops at strong points throughout the city there are already to many of them.', 
        choiceThreePower: 40, 
    },

    { 
        question: 'Daemons attack the city from the inside while the Chaos Spacemarines are assaulting the walls which will not hold for long.', 
        questionPower: 80, 
        choiceOne: 'Send in all reserves to counter the daemon incursion, the city will quickly fall and the population fall to insanity.', 
        choiceOnePower: 50, 
        choiceTwo: 'Deploy what Psykers we have to assist the troops fighting the daemons, they are our best weapon against them.', 
        choiceTwoPower: 60, 
        choiceThree: 'Call forth our Super Heavy tanks, Baneblades to smash the Chaos Spacemarines assault', 
        choiceThreePower: 70, 
    },

    { 
        question: 'The Chaos Spacemarines have broken through our defences but their numbers are low our final stand will determine the outcome of the battle!', 
        questionPower: 100, 
        choiceOne: 'For the Emperor!', 
        choiceOnePower: 80, 
        choiceTwo: 'Charge!', 
        choiceTwoPower: 80, 
        choiceThree: 'Purge the Heretics!', 
        choiceThreePower: 80, 
    }]

let spaceMarinesVsTyranidsQuestions = [
    { 
        question: 'Tyranids spores fall rapidly from the upper atmosphere, The sky is green with bio-chemicals. The Great Devourer is here and there is no choice but to defend the planet to the last man.', 
        questionPower: 20, 
        choiceOne: 'Begin a scorched earth campaign, destroy all organic life outside of the planetary capital leaving nothing for the tyranids to feed on.', 
        choiceOnePower: 20, 
        choiceTwo: 'Set up smaller static defences all over the planet to stretch the tyranid forces.', 
        choiceTwoPower: 5, 
        choiceThree: 'Bolster the planetary capitals defences with everything that you have.', 
        choiceThreePower: 10, 
    },

    { 
        question: 'Tyranid Gaunts cover the planet, swarming and consuming all that stand in their way. We need to destroy as many as possible but their numbers will continue to increase.', 
        questionPower: 40, 
        choiceOne: 'Purge the Xenos with flame, we will destroy them faster than they can reproduce', 
        choiceOnePower: 30, 
        choiceTwo: 'Send groups of elite Spacemarines to venture from the walls eliminate as many as they can and return before they are overrun.', 
        choiceTwoPower: 10, 
        choiceThree: 'Concentrate your automated defences on targeting the hordes while your Spacemarines occupy key defences and hold off probing attacks', 
        choiceThreePower: 25, 
    },

    { 
        question: 'The tyranids have finished consuming all life on the planet not protected in the planetary capital. They are assuming the walls of the city with millions of gaunts supported by warrior forms.', 
        questionPower: 60, 
        choiceOne: 'Focus all heavy weapons on the larger tyranids, they have a commanding influence on the smaller creatures around them.', 
        choiceOnePower: 40, 
        choiceTwo: 'Send your elite Terminators to the walls, their auto cannons and missile launchers will whittle the tyranids down.', 
        choiceTwoPower: 40, 
        choiceThree: 'Use your melee specialist fast attack troops to reinforce key parts of the defence.', 
        choiceThreePower: 40, 
    },

    { 
        question: 'The walls are holding thanks to the skill and determination of your troops, but a giant Carnifex is charging right for the main gate and will surely smash through it!', 
        questionPower: 80, 
        choiceOne: 'Send all Dreadnaughts to the main gate, together they may be able to bring down the Carnifex', 
        choiceOnePower: 70, 
        choiceTwo: 'Bring the creature down with well aimed heavy weapons fire before it can reach the gate.', 
        choiceTwoPower: 60, 
        choiceThree: 'Deploy all reserves to the main gate, if the gates fall the city will too.', 
        choiceThreePower: 50, 
    },

    { 
        question: 'We are losing the battle, but we have a chance the hive tyrant is the source of the tyranids synapse. If we destroy it the remaining tyranids will lose all cohesion!', 
        questionPower: 100, 
        choiceOne: 'Charge the Hive Tyrant yourself, Victory or Death!', 
        choiceOnePower: 80, 
        choiceTwo: 'Blast the creature with every heavy weapon you have left it will not stand against the Imperiums might!', 
        choiceTwoPower: 70, 
        choiceThree: 'Draw the Hive Tyrant deeper into the city and ambush it with your remaining Spacemarines.', 
        choiceThreePower: 50, 
    }]

let adMechVsTyranidsQuestions = [
    {
        question: 'Tyranids spores fall rapidly from the upper atmosphere, The sky is green with bio-chemicals. The Great Devourer is here and there is no choice but to defend the planet to the last man.', 
        questionPower: 20, 
        choiceOne: 'Load data with all previous encounters against the tyranids, learning from the past we will be able to make a plan to defeat them', 
        choiceOnePower: 20, 
        choiceTwo: 'Vent fuel tanks into the upper atmosphere and set the fuel alight, that will burn up the tyranid spores in the atmosphere.', 
        choiceTwoPower: 20, 
        choiceThree: 'Set traps and explosives in all available locations we must kill as many tyranids as we can without suffering losses.', 
        choiceThreePower: 10, 
    },

    { 
        question: 'Tyranid Gaunts cover the planet, swarming and consuming all that stand in their way. We need to destroy as many as possible but their numbers will continue to increase.', 
        questionPower: 40, 
        choiceOne: 'Bolster defences of the planetary capitals walls, and have your skitarii thin the tyranids numbers from the safety of the wall.', 
        choiceOnePower: 20, 
        choiceTwo: 'Send out maniples of servitors to destroy the Gaunts with a mixture of heavy weapons and explosives.', 
        choiceTwoPower: 20, 
        choiceThree: 'Steel the defences of the citys forges the weapons they can create will be important taking down the larger Tyranid creatures.', 
        choiceThreePower: 20, 
    },

    { 
        question: 'The tyranids have finished consuming all life on the planet not protected in the planetary capital. They are assuming the walls of the city with millions of Gaunts supported by Warrior forms.', 
        questionPower: 60, 
        choiceOne: 'Eliminate the Warrior creatures with your Skitarii rangers and their long range rifles.', 
        choiceOnePower: 40, 
        choiceTwo: 'Have your Techpriests, augment the defences on the wall supercharging weapons and controlling gun servitors.', 
        choiceTwoPower: 50, 
        choiceThree: 'Deploy your Ruststalker, close ranged specialists to man the walls and eliminate any breakthrough elements', 
        choiceThreePower: 30, 
    },

    { 
        question: 'The walls are holding thanks to the skill and determination of your troops, but a giant Carnifex is charging right for the main gate and will surely smash through it!', 
        questionPower: 80, 
        choiceOne: 'Deploy your Titan warmachines to the front gate they will destroy the Carnifex', 
        choiceOnePower: 80, 
        choiceTwo: 'Focus the Carnifex down with your Destroyer battle servitors, their gravity cannons will slow and crush the carapace of the tyranid', 
        choiceTwoPower: 60, 
        choiceThree: 'Have your Skitarii vanguard deploy to the gate their rapidfire radiation weapons will ruin the tyranid attack', 
        choiceThreePower: 50, 
    },

    { 
        question: 'We are losing the battle, but we have a chance the hive tyrant is the source of the tyranids synapse. If we destroy it the remaining tyranids will lose all cohesion!', 
        questionPower: 100, 
        choiceOne: 'Detonate the bombs located around key points in the city , this will give your troops enough time to eliminate the Hive Tyrant.', 
        choiceOnePower: 80, 
        choiceTwo: 'Engage the enemy yourself, you body is a mass of hyper advance weapons more than capable of destroying this "bug".', 
        choiceTwoPower: 80, 
        choiceThree: 'Take control of the Skitarii and remaining vehicles still alive you skills and knowledge will put them to best use', 
        choiceThreePower: 80, 
    }]

let guardVsTyranidsQuestions = [
    { 
        question: 'Tyranids spores fall rapidly from the upper atmosphere, The sky is green with bio-chemicals. The Great Devourer is here and there is no choice but to defend the planet to the last man.', 
        questionPower: 20, 
        choiceOne: 'Initiate a mass propaganda campaign amongst the population, the troops need to be ready for the horror that is the Tyranids.', 
        choiceOnePower: 10, 
        choiceTwo: 'Create hard points throughout the planet, the only way to defeat this enemy is to divide its might.', 
        choiceTwoPower: 5, 
        choiceThree: 'Bolster defences in the planetary capital, conscripting all those able to fight. We will need every man woman and child to hold the walls.', 
        choiceThreePower: 10, 
    },

    {
        question: 'Tyranid Gaunts cover the planet, swarming and consuming all that stand in their way. We need to destroy as many as possible but their numbers will continue to increase.', 
        questionPower: 40, 
        choiceOne: "Deploy our air forces in mass air strikes, they won't be able to miss.",        
        choiceOnePower: 30,        
        choiceTwo: 'Use our artillery guns to bombard all areas outside of the walls.',        
        choiceTwoPower: 20,        
        choiceThree: 'Increase the number of turrets and automated defences on the walls.',       
        choiceThreePower: 20,    
    },

    { 
        question: 'The tyranids have finished consuming all life on the planet not protected in the planetary capital. They are assuming the walls of the city with millions of gaunts supported by warrior forms.', 
        questionPower: 60, 
        choiceOne: 'Hold firm on the walls any cowards will be shot.', 
        choiceOnePower: 30, 
        choiceTwo: 'Increase the intensity of your artillery bombardments, the troops will not be able to hold without them.', 
        choiceTwoPower: 40, 
        choiceThree: 'Send every available man to the walls, we will counter their numbers with numbers.', 
        choiceThreePower: 50, 
    },

    { 
        question: 'The walls are holding thanks to the skill and determination of your troops, but a giant Carnifex is charging right for the main gate and will surely smash through it!', 
        questionPower: 80, 
        choiceOne: 'Counter this charge using your Baneblade super heavy tanks.', 
        choiceOnePower: 70, 
        choiceTwo: 'Send in your Ogryns to hold the gate their strength and sheer fortitude will allow us to reorganise.', 
        choiceTwoPower: 60, 
        choiceThree: 'Call in air strikes to bring down the beast, our own losses will be unfortunate.', 
        choiceThreePower: 50, 
    },

    {
        question: 'We are losing the battle, but we have a chance the hive tyrant is the source of the tyranids synapse. If we destroy it the remaining tyranids will lose all cohesion!', 
        questionPower: 100, 
        choiceOne: 'Charge all your remaining troops at the Hive Tyrant, For the Emperor!', 
        choiceOnePower: 75, 
        choiceTwo: "Bring out the last resort heavy plasma weapons, they have not been tested and can self destruct but it's our only option.",        
        choiceTwoPower: 70,        
        choiceThree: 'Load your troops into the remaining transports and head for the Hive Tyrant.A foot charge would be a bloodbath.',        
        choiceThreePower: 80,   
     }] 

/* Forces Information*/

let info =[
    { 
    factionName: 'Spacemarines', 
    summary: "The Space Marines or Adeptus Astartes are foremost amongst the defenders of Humanity, the greatest of the Emperor of Mankind's warriors. They are barely Human at all, but superhuman; having been made superior in all respects to a normal man by a harsh regime of genetic modification, psycho-conditioning and rigorous training. Space Marines are untouched by plague or any natural disease and can suffer wounds that would kill a lesser being several times over, and live to fight again. Clad in ancient power armour and wielding the most potent weapons known to man, the Space Marines are terrifying foes and their devotion to the Emperor and the Imperium of Man is unyielding. They are the God-Emperor's Angels of Death, and they know no fear.The Astartes are physically stronger, far more resilient and often mentally far removed from the lot of most normal Human beings. In the presence of the Astartes, most people feel a combination of awe and fear, and many cultures on the more primitive worlds simply worship them outright as demigods or angels of the God-Emperor made flesh.", 
    troopTitleOne: 'Dreadnoughts', 
    troopDescriptionOne: 'A Space Marine Dreadnought is a large, walking tank which carries both powerful guns and lethal close combat weaponry, armoured to withstand all but the most powerful of enemy firepower and often relied on by Space Marine forces to tear an opening in enemy defenses. Each Dreadnought contains a living being, permanently interfaced with the machine through a form of Mind Impulse Unit. Dreadnoughts are surprisingly agile, able to walk and balance with the ease of a living creature.', 
    troopTitleTwo: 'Terminators', 
    troopDescriptionTwo: "Terminators are Space Marine Veterans who have earned the right to wear Tactical Dreadnought Armour, better known as Terminator Armour, and serve as their Chapter's greatest infantry assets, each essentially serving as a walking tank. Tactical Dreadnought Armour combines the technological developments of Power Armour with the sealed environmental suits designed for starship crews that work in highly unstable or corrosive environments such as inside the high pressure casings of Plasma Reactor shields.", 
    troopTitleThree: 'Initiates/Scouts', 
    troopDescriptionThree: "Scout Marines are the newest recruits in a Space Marine Chapter. Their duties are to infiltrate the enemy positions or to fight as lightly armed skirmishers ahead of the rest of the Chapter. Operating behind enemy lines, Space Marine Scouts set ambushes for their foes, spy out the enemy's movements, and gather what information they can about their opponent's plans. More lightly armed and armoured than their more experienced Battle-Brothers, Space Marine Scouts chiefly fight as skirmishers, relying on stealth rather than brute force to accomplish missions.", 
    },

    { 
    factionName: 'Adeptus Mechanicus', 
    summary: "The Adeptus Mechanicus is a technological organisation, often known as the Priesthood of Mars. It holds a monopoly on technological knowledge in the Imperium. Their Forge Worlds turn out the Imperium's most powerful and advanced weaponry and equipment. The organisation's adepts, the Tech-priests, are vital in maintaining much of the Imperium's more technologically advanced equipment, not the least of which is the Emperor's life-sustaining Golden Throne.", 
    troopTitleOne: 'Skitarii', 
    troopDescriptionOne: 'Skitarii are armies of specially augmented cybernetic warriors sworn to a specific Forge World and serve alongside the Collegia Titanica and Taghmata Omnissiah as the military forces of the Mechanicum.It is a term equivalent to the Imperial Guard as it generally includes almost all combat personnel and armour that the Mechanicus possesses.', 
    troopTitleTwo: 'Servitors', 
    troopDescriptionTwo: "Servitors are mindless drones of flesh and metal used to carry out simple, manual tasks. They are one of the few tolerated forms of robotics in the Imperium as they are simply surgically enhanced cyborgs, not true artificial intelligence. Servitors are mindless, possessing only the most basic of instincts. Their brains are programmed to perform only the task they were designed for. The altered and fragmented brain of a Servitor functions poorly unless constantly supervised. Most will go into a state of mindlock, babbling incoherent nonsense as the Servitor tries to assert some form of awareness.", 
    troopTitleThree: 'Titans', 
    troopDescriptionThree: "Imperial Titans are known as God-Engines and are controlled by the Collegia Titanica, a powerful military arm of the Adeptus Mechanicus. The Collegia oversees the various Titan Legion's, each of which are based on a Forge World. Titans originally began as Human technology to allow settlers on new worlds to function in hostile environments, but today the god-engines are the most powerful fighting machines of the forces of the Emperor. The construction of Imperial Titans takes many years, and many of the more complex designs are considered lost technology.", 
    },

    {
    factionName: 'Imperial Guard', 
    summary: "The Astra Militarum, commonly known as Imperial Guard, is the primary fighting force of the Imperium,  the lists of new recruits and toll of casualties can run into the millions in a single day.  Attacking in seemingly endless influxes across battle-zones, charging forth under the cover of massive barrages and delivering massed lasgun volleys, in the Guard the individual Human soldier may appear a lost thing, almost forgotten. The Guard forms the very backbone of the Imperium. Whilst regular Guardsmen are hardly the equals of Space Marines, fighting neither with the advantages of genetic enhancement or the most powerful personal weaponry, the Guard possesses the courage and the manpower to face and annihilate the enemies of the Emperor across the galaxy.", 
    troopTitleOne: 'Baneblade Tanks', 
    troopDescriptionOne: 'The Baneblade is the primary super-heavy tank used by the Imperial Guard and is one of the largest and oldest tanks used by the Imperium. These massive machines often serve as the command vehicles for entire regiments or spearhead armoured attacks, organized into their own super-heavy companies. Such is the power of a Baneblade that nothing short of another war engine, such as a Titan, would dare to face one in single combat.', 
    troopTitleTwo: 'Ogryns', 
    troopDescriptionTwo: 'Ogryns (Homo Sapiens Gigantus) are the largest and most physically powerful type of abhuman. They make ideal warriors and are often recruited into Imperial Guard regiments, and used as close assault shock troops. Ogryns evolved on worlds with harsh and barren environments and high gravity. Most of these worlds, having no other use to humanity, were originally used as prison planets. Ogryns are large and bulky, standing between 2½ and 3 metres tall. Ogryns vary in appearance according to world, but all are tough and powerful. Some forms are well-muscled, while others tend more towards grotesque obesity.', troopTitleThree: 'Thunderbolt', 
    troopDescriptionThree: 'The Thunderbolt heavy fighter is the workhorse of the Imperial Navy. A rugged and reliable design, with good firepower and maneuverability, the Thunderbolt has been in service for centuries and remains well-liked by its crews. The Thunderbolt primarily serves as an air superiority fighter, given the task of hunting down enemy bombers or engaging enemy fighters in order to establish air superiority over the battlefield. However one of the chief advantages of the design is its versatility, allowing it to fulfill other types of missions.', 
    },

    { 
    factionName: 'Orks', 
    summary: "Orks are a warlike, crude, and highly aggressive green-skinned Xenos race. Orks are the dominant subspecies of the Orkoids, which includes the smaller Gretchin and Snotlings. Although their society is entirely primitive and brutal, the Orkoid race is also the most successful species in the whole Galaxy, outnumbering possibly every other race. However, due to their aggressive and warlike nature, this massive race is split into hundreds of tiny empires, warring as much between themselves as against other races. In the purely theoretical event all the Orks were to unite, they would undoubtedly crush all opposition. ", troopTitleOne: 'Warboss', 
    troopDescriptionOne: 'The Warboss is the highest position in a large Ork Waaagh!; he is always the biggest, strongest and most cunning Ork in any given grouping of such creatures, and gets the best armour, weapons, and equipment.He is easily distinguishable from his brethren because of his bossy nature and tendency to be over 3 meters tall. As a general rule of thumb, the more successful a Warboss is, the larger he is.', 
    troopTitleTwo: 'Ork Boyz', 
    troopDescriptionTwo: "Ork Boyz are about 2 metres tall when standing fully upright and vary greatly in their specific battlefield roles. Ork Boyz who occupy the same field of interest often band together in groups known as Mobs, these mobs are led by an Ork Nob who epitomises the group's skills. As basic Ork troops, Ork Boys vary in weaponry and equipment. They are usually divided into the following categories.Note that Ork Boy can fall into several categories, for example, if he is equipped with Shoota, 'Eavy Armour and Stikkbomms and rides into battle on a Trukk he would be a Shoota Boy, a Stikk Bomma, 'Ard Boy and Trukkboy at the same time. ", 
    troopTitleThree: 'Ork Nobs', 
    troopDescriptionThree: "Nobz are the larger Ork boyz who are still smaller than the Warboss of a tribe, but are able to exert their authority upon their peers through their sheer size and commanding, if brutish, nature. The term 'Nob' is believed to be short for a parody of the Gothic word 'Nobles', but pronounced by the guttural Orkish throats as 'Knobs'. They usually get the best pick of the weapons and armour whenever the mob comes across anything worth taking. Nobs are usually found barking orders to mobs of boyz, but its not uncommon to find them in elite squads of their own, or forming the bodyguard for the Warboss, where they will probably in squads of Meganobz.", 
    },

    { 
    factionName: 'Chaos', 
    summary: 'The Chaos Gods, also called the Dark Gods or the Ruinous Powers, are powerful beings of the psychic universe known as the Warp, created and sustained by the emotions and souls of every living being of the material universe. Although they are god-like beings, they are by their nature monomaniacal and completely single-minded as well as being completely dependent on the emotions of mortal creatures for their power and continued existence. ', 
    troopTitleOne: 'Chaos Space Marines', 
    troopDescriptionOne: 'Within the confines of the hellish zone of the Galaxy known as the Eye of Terror, the banished Chaos Space Marines, along with their exiled allies and slaves, have created their own Imperium of Chaos. In the most Chaos-saturated region of the galaxy, few in the ten thousand years of their exile have escaped mutation in some form. Within the Eye, the legions fight among themselves for gene-seed, resources, slaves, or for the greater glory of the Chaos Gods. The legions however are far more driven by their hatred of the Imperium than by internecine rivalry. From the Eye, the forces of Chaos Marines emerge to exact their vengeance upon the Imperium, continuing the Long War they begun ten thousand years ago.', 
    troopTitleTwo: 'Deamons', 
    troopDescriptionTwo: 'Daemons are the creation of the Gods of Chaos, formed from their own essences. Of a somewhat different nature than their masters, they are the most numerous of the Warps inhabitants and are thought to be near-infinite in number. A Daemon is "born" when a Chaos God expends a portion of its power to create a separate being, binding a collection of senses, thoughts, and purposes together. This essentially creates a consciousness and personality that can move within the Warp. The Chaos God can reclaim this form at any time, and this ensures the loyalty of the Daemon. Not all Daemons act entirely in accord with their masters, but even the greatest of them would not dare outright defiance. Though it may appear to be made of matter in the Materium, within the Warp a Daemon is no more physical than the rest of the Realm of Chaos.', 
    troopTitleThree: 'Chaos Cultists', 
    troopDescriptionThree: 'All planets and civilisations belonging to the Imperium can harbour Chaos organisations, which themselves are as diverse in practice and membership as is imaginable. From the blood-soaked sacrificial cults of feral worlds to the philosophical secret societies of more advanced worlds, the temptations of Chaos can capture all. Indeed, according to the Ordo Hereticus, Chaos Cults can arise from any class of Imperial society, be it impoverished, noble, hive-gang, abhuman, soldiers, or mutant. The objective of the Chaos Cult is to survive and eventually dominate the society. Mere survival is particularly important on Imperial worlds, where Chaos worship is the greatest of heresies and Inquisitors are always vigilant and ready to wipe out any taint of Chaos.', 
    },
    
    { 
    factionName: 'Tyranids', 
    summary: 'The exact origin of the Tyranids themselves is unclear, save the fact that they are not of The Galaxy and have only recently arrived here after traveling countless millennia in the intergalactic void. It is unknown which galaxy they originated from, or for how long the Tyranid race has been on its genocidal rampage, but it is believed that it is the Astronomican that is drawing the Tyranid Hive Fleet to threaten the galaxy.  Indeed their very name is but a title given to them by the Imperium, named after the planet where they were first encountered (Tyran). It is possible that they have been preying on other galaxies since time immemorial.  According to another source, they have consumed one thousand galaxies and are responsible for the annihilation of millions of intelligent species.', 
    troopTitleOne: 'Hive Tyrant', 
    troopDescriptionOne: 'Hive Tyrants are monstrous Tyranid creatures created to be commanders of the Tyranid swarm. They embody the Hive Mind completely and act as the primary Synapse conduit through which it enforces its will over lesser Tyranid creatures. Hive Tyrants are extremely powerful, large and strong monsters three times the height of a man that can tear through plasteel or ferrocrete as if they were glass. They excel in both close combat and ranged fighting, and in fact every part of their body is perfectly designed to maim and kill. They are highly mutable, with individual Hive Tyrants displaying a wide range of physical characteristics, biomorphs, and bio-weapons', troopTitleTwo: 'Warriors', 
    troopDescriptionTwo: 'Tyranid Warriors are large creatures, although significantly smaller than the massive Hive Tyrants. They are fast and powerful, with the capability to be strong at ranged combat or in close quarters in a similar fashion to the Hive Tyrant. Tyranid Warriors are the most adaptable of all the Hive Mind’s bioforms. They are creatures from the blackest of nightmares, unstoppable killing machines with pulsing ichor for blood, needle-sharp teeth and darkly gleaming eyes that reveal a terrible intelligence at work. A Tyranid Warrior stands twice the height of a man, its carapace protected by a thick chitin. One might expect such a creature to be slow in its actions, but a Tyranid Warrior is lithe, with reactions as swift as a whip. Tyranid Warriors have the mental flexibility to employ a wide variety of bio-weapon symbiotes.', 
    troopTitleThree: 'Carnifex', 
    troopDescriptionThree: "Carnifexes excel at thunderous charges, where their immense bulk is used to crush or smash through any opponent or obstacle. They are not as swift as other Tyranid creatures but their brute force more than makes up for this. A Carnifex's stampede takes time to build force as their incredible alien musculature strains to propel it forward. As it builds momentum and reaches top speed, the ground shakes with each stride of the monster and foes are scattered or trampled before it, and only fortress walls or Super Heavy Tanks have any chance of surviving the ferocious impact.", },
    ]