/*Troops*/

const faction = {
    spacemarines: "Spacemarines are the genetically enhanced super soldiers of the Imperium of man. Feared through the galaxy and one of humanity's greatest defenders, they know no fear wear thick ceramite armour that makes them almost invunrable to small arms fire.",

    admech:"The Adeptus Mechanicus is one of the most powerful organisations in the Imperium. More machine than human, they field large number machine enhanced troops with technologically advanced weapons while thier gigantic warmachines stalk the battlefield.",
    
    guard:"The Guard forms the very backbone of the Imperium; without it, Mankind would surely perish. Fighting neither with the advantages of genetic enhancement or the most powerful personal weaponry, the Guard possesses the courage and the manpower to face and annihilate the enemies of the Emperor across the galaxy.",
}
/*Enemies*/

 const enemies = {
     orks: "Orks are a warlike, crude, and highly aggressive green-skinned Xenos race. Although their society is entirely primitive and brutal, the Ork race is also the most successful species in the whole Galaxy, outnumbering possibly every other race. However, due to their aggressive and warlike nature, warring as much between themselves as against other races.",

     chaos: "The Chaos Space Marines were once loyal, superhuman warriors of the Emperor, but turned their backs on the Master of Mankind when his foremost son and Primarch, the Warmaster Horus, was corrupted by the Chaos Gods. Now, as champions of the Dark Gods infused with the infernal power of the warp, they seek only to destroy the very empire they once fought to build more than 10 thousand years ago.",

     tyranids: "The Tyranids are an extragalactic alien race, whose sole purpose is the consumption of all forms of genetic and biological material in order to evolve and reproduce. Every function is carried out by living, engineered creatures, each of which collectively forms the Hive Fleet, directed by a single Hive Mind.The Tyranids are seen as one of the gravest threats to the entire Galaxy.",
 }

 /* Talking Head */

 let talkingHead = document.querySelector(".talking-head-box");
 let talkingHeadTxt = document.querySelector("#talking-head-text");
 let talkingHeadBtn = document.querySelector("#talking-head-btn");

 let talkingHeadGreet =
 "Greetings Commander... you have been assigned to the defence of the planet OMACRON DONACUS 32... you will need to choose which of the Imperiums armys will command to defend it...";
 let talkingHeadGreetTwo =
 "Unfortunatley we only have the resourses to deploy one of the imperial factions... choose wisley not all forces are created equal...";
 let talkingHeadEnemy = 
 "Now you have selected your army we you need to decided what enemy we shall face... all are of equal importance but some may be harder to defeat than others...";
 let talkingHeadGame = 
 "Welcome to the 'Battle' screen Commander... here you can see the enemys actions and what tactics are avaliable to counter them...";
 let talkingHeadGameTwo = 
 "Be aware... once you decide a plan of action it could have dire consequences... For the Emperor!...";
 let forcesIntro = 
 "Welcome to the 'Forces' screen Commander...here you can find information on both the factions you command and the enemies you will face..."

 /* Game Objects */

 let question = document.querySelector(".question-box");
 let battleImage = document.querySelector(".question-image");
 let answerOne = document.querySelector(".answer-one");
 let answerTwo = document.querySelector(".answer-two");
 let answerThree =  document.querySelector(".answer-three");
 let i = 0;
 let spaceMarineHealth = 125;
 let adMechHealth = 100;
 let guardHealth = 75;
 let defence = 0;

let spaceMarinesVsOrksQuestions = [
    {
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?',
        questionPower: 20,
        choiceOne: 'Send a small scouting force to confirm the reports.',
        choiceOnePower: 10,
        choiceTwo: 'Begin to fortify larger settlements on the plannet and brace for an attack.',
        choiceTwoPower: 15,
        choiceThree: 'Organise rapid strike forces to premptilvey attack the orks before thier numbers can grow.',
        choiceThreePower: 20,
    },

    {
        question: 'The Orks numbers have grown considrably and they are attacking fringe settlements. How do we handle this menance?',
        questionPower: 40,
        choiceOne: 'Strike them hard and fast elminating thier leaders.',
        choiceOnePower: 30,
        choiceTwo: 'Pull back all civilains and our forces to the planetary capital.',
        choiceTwoPower: 20,
        choiceThree: 'Organise a defence in depth, try to hold and defend the settlements.',
        choiceThreePower: 10,
    },

    {
        question: 'The Orks have pushed us back and are now attacking the planetrary capital with all thier might.',
        questionPower: 60,
        choiceOne: 'Counter attack with armoured vehicles and fast attack troops.',
        choiceOnePower: 30,
        choiceTwo: 'Dig in the troops and deploy our heavy weapons teams to hold back the tide.',
        choiceTwoPower: 50,
        choiceThree: 'Bolster the line at key points using Dreadnoughts.',
        choiceThreePower: 40,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'Engage them in melee to slow them down and allow us to reform the line with our reserves.',
        choiceOnePower: 50,
        choiceTwo: 'Pull back inside the city and allow the citys automated defences to thin the horde.',
        choiceTwoPower: 60,
        choiceThree: 'Send our initiates to plug the gaps and prove themselves.',
        choiceThreePower: 30,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Teleport our elite terminators directley into the Warbosses path and destory him.',
        choiceOnePower: 80,
        choiceTwo: 'Send infiltrators to find and elimnate him at range.',
        choiceTwoPower: 50,
        choiceThree: 'Oblitrate him with a massive bombardment from our ships in orbit.',
        choiceThreePower: 60,
    }
]

let adMechVsOrksQuestions = [
    {
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?',
        questionPower: 20,
        choiceOne: 'Study past conflicts with the Orks and determine what stratergy would be best used to defeat them',
        choiceOnePower: 20,
        choiceTwo: 'Ignore the Orks the goal of gathering Knowledge is much more important',
        choiceTwoPower: 5,
        choiceThree: 'Deploy Skitarii rangers to determine weather the reports are true ',
        choiceThreePower: 10,
    },

    {
        question: 'The Orks numbers have grown considrably and they are attacking fringe settlements. How do we handle this menance?',
        questionPower: 40,
        choiceOne: 'Fully mobilise all ground forces similtaniousley attack the Orks and building defences around the larger settlements.',
        choiceOnePower: 30,
        choiceTwo: 'Deploy the Legio Cybernetica and have thier automatons destory the attacking Orks.',
        choiceTwoPower: 20,
        choiceThree: 'Send out the bombers and ironstriders on hit an run attacks while the rest of the troops organise the defence.',
        choiceThreePower: 30,
    },

    {
        question: 'The Orks have pushed us back and are now attacking the planetrary capital with all thier might.',
        questionPower: 60,
        choiceOne: 'Give local command to the Skitarri captains they will best know how to organise the troops',
        choiceOnePower: 40,
        choiceTwo: 'Use your tanks and other heavy vehicles to whittle down thier numbers as your Skitarii fall back.',
        choiceTwoPower: 30,
        choiceThree: 'Send in bombers and other air assets to strafe thier forces with bombs. ',
        choiceThreePower: 30,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'Send in the Legio Titanica Titans to oblitiate them.',
        choiceOnePower: 80,
        choiceTwo: 'Send in the Vanguard reserves destory them with radiation',
        choiceTwoPower: 50,
        choiceThree: 'Set up crossfires using Rangers and thier sniper rifles',
        choiceThreePower: 40,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Have the rustalkers infiltrate and eliminate him.',
        choiceOnePower: 70,
        choiceTwo: 'Launch a spearhead into the enemy lines with the imperial knights aim right for the Warboss.',
        choiceTwoPower: 80,
        choiceThree: 'Launch a desperate counter attack with all ground forces you have to spare.',
        choiceThreePower: 50,
    }
]

let guardVsOrksQuestions = [
    {
        question: 'Ork activity has been reported in the more uninhabited parts of the planet. What is the first step we should take?',
        questionPower: 20,
        choiceOne: 'Start conscripting the local population all people will be needed to hold back the Orks.',
        choiceOnePower: 10,
        choiceTwo: 'Call in support from other planets in the region but they may not get here in time',
        choiceTwoPower: 5,
        choiceThree: 'Amass your troops close to the planetary captial.',
        choiceThreePower: 10,
    },

    {
        question: 'The Orks numbers have grown considrably and they are attacking fringe settlements. How do we handle this menance?',
        questionPower: 40,
        choiceOne: 'Hold each settlement to the last man.',
        choiceOnePower: 10,
        choiceTwo: 'Use all air power to destory the Orks it is already too late to save those in the settlements',
        choiceTwoPower: 15,
        choiceThree: 'Smash the attacking forces using our tanks to blunt thier advance.',
        choiceThreePower: 20,
    },

    {
        question: 'The Orks have pushed us back and are now attacking the planetrary capital with all thier might.',
        questionPower: 60,
        choiceOne: 'Use artillery and gun enplacements to blunt any advance.',
        choiceOnePower: 40,
        choiceTwo: 'Amass troops at vital location with numbers we shall hold them off.',
        choiceTwoPower: 30,
        choiceThree: 'Hold the outside of the city at all costs, many will die in the trenches.',
        choiceThreePower: 20,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'An armoured counter attack with our remaining tanks will thrust them out of the city',
        choiceOnePower: 70,
        choiceTwo: 'Deploy our elite storm troops the Orks wont know what hit them. ',
        choiceTwoPower: 60,
        choiceThree: 'Shoot the men that are running away, the others will hold firm.',
        choiceThreePower: 80,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Charge the Warboss with our mutant Ogryn thier massive guns and strength will wear him down.',
        choiceOnePower: 75,
        choiceTwo: 'Anhilate there Warbosses location with all artiliery batterys, nothing would be able to withstand that.',
        choiceTwoPower: 90,
        choiceThree: 'Lead the charge yourself, our faith in the emperor will see us through this.',
        choiceThreePower: 60,
    }
]

let spaceMarinesVsChaosQuestions = [
    {
        question: 'On arival to the planetary captial it is obvious somthing is not right. The populace are restless, many strange icons and idols adore the buildings in the lower part of the city. Bands of hooded men are roaming the streets chanting foul incantations and there have been clashes with local defence forces.',
        questionPower: 20,
        choiceOne: 'Ignore these pests they are a concern of the defence forces not the Spacemarines.',
        choiceOnePower: 0,
        choiceTwo: 'Work with the local troops to increase patrols and stap out any signs of heresy.',
        choiceTwoPower: 10,
        choiceThree: 'Purge all icons and idols and kill anyone who gets in our way, this heresy will not stand!',
        choiceThreePower: 5,
    },

    {
        question: 'The clashes have become full blown riots, whole sections of the city have been barricaded and heads of local leaders adorn spikes.',
        questionPower: 40,
        choiceOne: 'Anihilate all those who oppose you with fire, destory the lower sections of the city and cleans them of the heritics.',
        choiceOnePower: 20,
        choiceTwo: 'Clear out the barricades and eliminate the cultist leaders, they will not stand a chance.',
        choiceTwoPower: 25,
        choiceThree: 'Seal off the overun areas of the city and secure the outer defences, these disturbances can only mean one thing.',
        choiceThreePower: 20,
    },

    {
        question: 'A massive Chaos Spacemarine fleet has arrived in orbit, our fleet has been destoryed and their assult craft are rapidley approaching.',
        questionPower: 60,
        choiceOne: 'Focus on the assult craft with anti aircraft guns, an allied fleet has been sent to aid you but its arrival date is unknown',
        choiceOnePower: 40,
        choiceTwo: 'Spend time reinforcing the city, we will not fall without a fight.',
        choiceTwoPower: 30,
        choiceThree: 'Organise your troops into assult teams and cut down the enemy while they are landing.',
        choiceThreePower: 40,
    },

    {
        question: 'Daemons attack the city from the inside while the Chaos Spacemarines are assulting the walls which will not hold for long.',
        questionPower: 80,
        choiceOne: 'Locate the source of the daemons and destory it, the longer we leave the rift open more daemons will come.',
        choiceOnePower: 50,
        choiceTwo: 'Leave the daemons to the defence force, there Chaos Spacemarines are the bigger threat without the outer defences all is lost.',
        choiceTwoPower: 50,
        choiceThree: 'Split your forces, there is no choice if we let our defences laspe anywhere we will surley fall.',
        choiceThreePower: 60,
    },

    {
        question: 'The Chaos Spacemarines have broken through our defences but thier numbers are low our final stand will determine the outcome of the battle!',
        questionPower: 100,
        choiceOne: 'Form a final defencive line... there is still a chance the relif fleet will come.',
        choiceOnePower: 70,
        choiceTwo: 'Lead a final attack and elimiate as many Chaos Spacemarines and Daemons as you can, make them pay for attacking the Imperium',
        choiceTwoPower: 80,
        choiceThree: 'Pull back our troops and leave the planet to its fate, there may still be a space vessel thats working somewhere.',
        choiceThreePower: 60,
    }
]

let adMechVsChaosQuestions = [
    {
        question: 'On arival to the planetary captial it is obvious somthing is not right. The populace are restless, many strange icons and idols adore the buildings in the lower part of the city. Bands of hooded men are roaming the streets chanting foul incantations and there have been clashes with local defence forces.',
        questionPower: 20,
        choiceOne: 'Bless the areas with scared oils and incense that will purge any corruption.',
        choiceOnePower: 5,
        choiceTwo: 'Analyse past occourences of this kind of behavior from your data banks to see if anything like this has happened before and what best can be done to stop it.',
        choiceTwoPower: 15,
        choiceThree: 'Deploy automated probes and senteries to scour the area, sending troops would be a waste of time and distract them from the omnissias work.',
        choiceThreePower: 10,
    },

    {
        question: 'The clashes have become full blown riots, whole sections of the city have been barricaded and heads of local leaders adorn spikes.',
        questionPower: 40,
        choiceOne: 'Attempt to capture a few of the rioters and have our biologists analyse them and see what could be effecting these people.',
        choiceOnePower: 10,
        choiceTwo: 'Deploy some of your skitarii to the area to clear out resistance, the production facilites of this world must be maintained',
        choiceTwoPower: 20,
        choiceThree: 'Send in drones and gun servitors to oblitirate any and all rioters, the Mechanicum will not stand base humans defying the Omnisiaas will.',
        choiceThreePower: 20,
    },

    {
        question: 'A massive Chaos Spacemarine fleet has arrived in orbit, our fleet has been destoryed and their assult craft are rapidley approaching.',
        questionPower: 60,
        choiceOne: 'Leave the outer defences the will not be enough time to send troops to defend them. We must prioritise the forge complexes ',
        choiceOnePower: 40,
        choiceTwo: 'Focus all servitors and heavy on the approaching assult craft. They will not be able to assult the city if they cannot even land on the planet.',
        choiceTwoPower: 50,
        choiceThree: 'Begin securing the valuable technolgy in the citys forges, as it cannot be replicated.It is more imporant than the civilian population.',
        choiceThreePower:30 ,
    },

    {
        question: 'Daemons attack the city from the inside while the Chaos Spacemarines are assulting the walls which will not hold for long.',
        questionPower: 80,
        choiceOne: 'Destory the lower areas of the city, mabye the destruction will stem the flow of daemons then we can focus on the main Chaos Spacemarine attack.',
        choiceOnePower: 50,
        choiceTwo: 'Send small stike teams to the lower city, try and close the tears in reality that are allowing the daemons to attck us from the inside.',
        choiceTwoPower: 60,
        choiceThree: 'Take control of the skitarri defending the walls, your thousands of years of experince will help to turn the fight in our favor.',
        choiceThreePower: 60,
    },

    {
        question: 'The Chaos Spacemarines have broken through our defences but thier numbers are low our final stand will determine the outcome of the battle!',
        questionPower: 100,
        choiceOne: 'Trigger the bombs located all around the city, the heretics will not control the knowledge and forges of this world.',
        choiceOnePower: 70,
        choiceTwo: 'Fight for every inch of ground, our weapons are superior and we follow the Omnisiaas will.',
        choiceTwoPower: 60,
        choiceThree: 'Send in a final counter attack with our remaining titans and war machines, they will not stand a chance',
        choiceThreePower: 90,
    }
]

let guardVsChaosQuestions = [
    {
        question: 'On arival to the planetary captial it is obvious somthing is not right. The populace are restless, many strange icons and idols adore the buildings in the lower part of the city. Bands of hooded men are roaming the streets chanting foul incantations and there have been clashes with local defence forces.',
        questionPower: 20,
        choiceOne: 'Intergrate your troops with the local defence forces and increase number of patrols and shakedowns of these areas.',
        choiceOnePower: 10,
        choiceTwo: 'Sanction local priests to enter the areas, their sermons and relegious feurvor shall settle the people.',
        choiceTwoPower: 10,
        choiceThree: 'Keep your troops out of these "corrupted" areas and make sure key personal and facilities are defended',
        choiceThreePower: 5,
    },

    {
        question: 'The clashes have become full blown riots, whole sections of the city have been barricaded and heads of local leaders adorn spikes.',
        questionPower: 40,
        choiceOne: 'Commit your forces to end the riots, break into the sealded areas of the city. Traitors to the Imperium will not be allowed to survive.',
        choiceOnePower: 20,
        choiceTwo: 'Seal off those areas of the city, we cannot spare the troops to take down these rebels down. Let them destory themseleves. None will leave the area.',
        choiceTwoPower: 25,
        choiceThree: 'Destroy the non compliant areas of the city, we do not have the resources to spare to deal with this issue conventially.',
        choiceThreePower: 15,
    },

    {
        question: 'A massive Chaos Spacemarine fleet has arrived in orbit, our fleet has been destoryed and their assult craft are rapidley approaching.',
        questionPower: 60,
        choiceOne: 'Focus all heavy weapons and gun batterys onto the assult craft, this will buy us time to muster the troops and set up stratigic defences.',
        choiceOnePower: 40,
        choiceTwo: 'Launch our own in atmosphere fighters and gunships to thin thier numbers, so all heavy weapons enplacements can be used to defend the walls.',
        choiceTwoPower: 50,
        choiceThree: 'Amass troops at strong points throughout the city there are already to many of them.',
        choiceThreePower: 40,
    },

    {
        question: 'Daemons attack the city from the inside while the Chaos Spacemarines are assulting the walls which will not hold for long.',
        questionPower: 80,
        choiceOne: 'Send in all reserves to counter the daemon incursion, the city will quickley fall and the population fall to insanity.',
        choiceOnePower: 50,
        choiceTwo: 'Deploy what Psykers we have to assist the troops fighting the daemeons, they are our best weapon against them.',
        choiceTwoPower: 60,
        choiceThree: 'Call fourth our Superheavy tanks, Baneblades to smash the Chaos Spacemarines assult',
        choiceThreePower: 70,
    },

    {
        question: 'The Chaos Spacemarines have broken through our defences but thier numbers are low our final stand will determine the outcome of the battle!',
        questionPower: 100,
        choiceOne: 'For the Emperor!',
        choiceOnePower: 80,
        choiceTwo: 'Charge!',
        choiceTwoPower: 80,
        choiceThree: 'Purge the Heritics!',
        choiceThreePower: 80,
    }
]

let spaceMarinesVsTyranidsQuestions = [
    {
        question: 'one',
        questionPower: 20,
        choiceOne: 'yes',
        choiceOnePower: 5,
        choiceTwo: 'yes',
        choiceTwoPower:10,
        choiceThree: 'yes',
        choiceThreePower: 10,
    },

    {
        question: 'two',
        questionPower: 40,
        choiceOne: 'yes',
        choiceOnePower: 20,
        choiceTwo: 'yes',
        choiceTwoPower: 30,
        choiceThree: 'yes',
        choiceThreePower: 10,
    },

    {
        question: 'three',
        questionPower: 60,
        choiceOne: 'yes',
        choiceOnePower: 30,
        choiceTwo: 'yes',
        choiceTwoPower: 20,
        choiceThree: 'yes',
        choiceThreePower: 50,
    },

    {
        question: 'four',
        questionPower: 80,
        choiceOne: 'yes',
        choiceOnePower: 70,
        choiceTwo: 'yes',
        choiceTwoPower: 60,
        choiceThree: 'yes',
        choiceThreePower: 50,
    },

    {
        question: 'five',
        questionPower: 100,
        choiceOne: 'yes',
        choiceOnePower: 80,
        choiceTwo: 'yes',
        choiceTwoPower: 90,
        choiceThree: 'yes',
        choiceThreePower: 100,
    }
]

let adMechVsTyranidsQuestions = [
    {
        question: 'one',
        questionPower: 20,
        choiceOne: 'yes',
        choiceOnePower: 5,
        choiceTwo: 'yes',
        choiceTwoPower:10,
        choiceThree: 'yes',
        choiceThreePower: 10,
    },

    {
        question: 'two',
        questionPower: 40,
        choiceOne: 'yes',
        choiceOnePower: 20,
        choiceTwo: 'yes',
        choiceTwoPower: 30,
        choiceThree: 'yes',
        choiceThreePower: 10,
    },

    {
        question: 'three',
        questionPower: 60,
        choiceOne: 'yes',
        choiceOnePower: 30,
        choiceTwo: 'yes',
        choiceTwoPower: 20,
        choiceThree: 'yes',
        choiceThreePower: 50,
    },

    {
        question: 'four',
        questionPower: 80,
        choiceOne: 'yes',
        choiceOnePower: 70,
        choiceTwo: 'yes',
        choiceTwoPower: 60,
        choiceThree: 'yes',
        choiceThreePower: 50,
    },

    {
        question: 'five',
        questionPower: 100,
        choiceOne: 'yes',
        choiceOnePower: 80,
        choiceTwo: 'yes',
        choiceTwoPower: 90,
        choiceThree: 'yes',
        choiceThreePower: 100,
    }
]

let guardVsTyranidsQuestions = [
    {
        question: 'one',
        questionPower: 20,
        choiceOne: 'yes',
        choiceOnePower: 5,
        choiceTwo: 'yes',
        choiceTwoPower:10,
        choiceThree: 'yes',
        choiceThreePower: 10,
    },

    {
        question: 'two',
        questionPower: 40,
        choiceOne: 'yes',
        choiceOnePower: 20,
        choiceTwo: 'yes',
        choiceTwoPower: 30,
        choiceThree: 'yes',
        choiceThreePower: 10,
    },

    {
        question: 'three',
        questionPower: 60,
        choiceOne: 'yes',
        choiceOnePower: 30,
        choiceTwo: 'yes',
        choiceTwoPower: 20,
        choiceThree: 'yes',
        choiceThreePower: 50,
    },

    {
        question: 'four',
        questionPower: 80,
        choiceOne: 'yes',
        choiceOnePower: 70,
        choiceTwo: 'yes',
        choiceTwoPower: 60,
        choiceThree: 'yes',
        choiceThreePower: 50,
    },

    {
        question: 'five',
        questionPower: 100,
        choiceOne: 'yes',
        choiceOnePower: 80,
        choiceTwo: 'yes',
        choiceTwoPower: 90,
        choiceThree: 'yes',
        choiceThreePower: 100,
    }
]

/* Forces Information*/

let info = [
    {
        factionName: 'Spacemarines',
        summary: "The Space Marines or Adeptus Astartes are foremost amongst the defenders of Humanity, the greatest of the Emperor of Mankind's warriors. They are barely Human at all, but superhuman; having been made superior in all respects to a normal man by a harsh regime of genetic modification, psycho-conditioning and rigorous training. Space Marines are untouched by plague or any natural disease and can suffer wounds that would kill a lesser being several times over, and live to fight again. Clad in ancient power armour and wielding the most potent weapons known to man, the Space Marines are terrifying foes and their devotion to the Emperor and the Imperium of Man is unyielding. They are the God-Emperor's Angels of Death, and they know no fear.The Astartes are physically stronger, far more resilient and often mentally far removed from the lot of most normal Human beings. In the presence of the Astartes, most people feel a combination of awe and fear, and many cultures on the more primitive worlds simply worship them outright as demigods or angels of the God-Emperor made flesh.",
        troopTitleOne: 'Dreadnoughts',
        troopDescriptionOne: 'A Space Marine Dreadnought is a large, walking tank which carries both powerful guns and lethal close combat weaponry, armoured to withstand all but the most powerful of enemy firepower and often relied on by Space Marine forces to tear an opening in enemy defenses. Each Dreadnought contains a living being, permanently interfaced with the machine through a form of Mind Impulse Unit. Dreadnoughts are surprisingly agile, able to walk and balance with the ease of a living creature.',
        troopTitleTwo: 'Terminators',
        troopDescriptionTwo: "Terminators are Space Marine Veterans who have earned the right to wear Tactical Dreadnought Armour, better known as Terminator Armour, and serve as their Chapter's greatest infantry assets, each essentially serving as a walking tank. Tactical Dreadnought Armour combines the technological developments of Power Armour with the sealed environmental suits designed for starship crews that work in highly unstable or corrosive environments such as inside the high pressure casings of Plasma Reactor shields.",
        troopTitleThree: 'Initiates/Scouts',
        troopDescriptionThree: "Scout Marines are the newest recruits in a Space Marine Chapter. Their duties are to infiltrate the enemy positions or to fight as lightly armed skirmishers ahead of the rest of the Chapter. Operating behind enemy lines, Space Marine Scouts set ambushes for their foes, spy out the enemy's movements, and gather what information they can about their opponent's plans. More lightly armed and armoured than their more experienced Battle-Brothers, Space Marine Scouts chiefly fight as skirmishers, relying on stealth rather than brute force to accomplish missions.",
    },

    {
        factionName: 'Adeptus Mechanicus',
        summary: "The Adeptus Mechanicus is a technological organisation, often known as the Priesthood of Mars. It holds a monopoly on technological knowledge in the Imperium. Their Forge Worlds turn out the Imperium's most powerful and advanced weaponry and equipment. The organisation's adepts, the Tech-priests, are vital in maintaining much of the Imperium's more technologically advanced equipment, not the least of which is the Emperor's life-sustaining Golden Throne.",
        troopTitleOne: 'Skitarii',
        troopDescriptionOne: 'Skitarii are armies of specially augmented cybernetic warriors sworn to a specific Forge World and serve alongside the Collegia Titanica and Taghmata Omnissiah as the military forces of the Mechanicum.It is a term equivalent to the Imperial Guard as it generally includes almost all combat personnel and armour that the Mechanicus possesses.',
        troopTitleTwo: 'Servitors',
        troopDescriptionTwo: "Servitors are mindless drones of flesh and metal used to carry out simple, manual tasks. They are one of the few tolerated forms of robotics in the Imperium as they are simply surgically enhanced cyborgs, not true artificial intelligence. Servitors are mindless, possessing only the most basic of instincts. Their brains are programmed to perform only the task they were designed for. The altered and fragmented brain of a Servitor functions poorly unless constantly supervised. Most will go into a state of mindlock, babbling incoherent nonsense as the Servitor tries to assert some form of awareness.",
        troopTitleThree: 'Titans',
        troopDescriptionThree: "Imperial Titans are known as God-Engines and are controlled by the Collegia Titanica, a powerful military arm of the Adeptus Mechanicus. The Collegia oversees the various Titan Legion's, each of which are based on a Forge World. Titans originally began as Human technology to allow settlers on new worlds to function in hostile environments, but today the god-engines are the most powerful fighting machines of the forces of the Emperor. The construction of Imperial Titans takes many years, and many of the more complex designs are considered lost technology.",
    },

    {
        factionName: 'Imperial Guard',
        summary: "The Astra Militarum, commonly known as Imperial Guard, is the primary fighting force of the Imperium,  the lists of new recruits and toll of casualties can run into the millions in a single day.  Attacking in seemingly endless influxes across battle-zones, charging forth under the cover of massive barrages and delivering massed lasgun volleys, in the Guard the individual Human soldier may appear a lost thing, almost forgotten. The Guard forms the very backbone of the Imperium. Whilst regular Guardsmen are hardly the equals of Space Marines, fighting neither with the advantages of genetic enhancement or the most powerful personal weaponry, the Guard possesses the courage and the manpower to face and annihilate the enemies of the Emperor across the galaxy.",
        troopTitleOne: 'Baneblade Tanks',
        troopDescriptionOne: 'The Baneblade is the primary super-heavy tank used by the Imperial Guard and is one of the largest and oldest tanks used by the Imperium. These massive machines often serve as the command vehicles for entire regiments or spearhead armoured attacks, organized into their own super-heavy companies. Such is the power of a Baneblade that nothing short of another war engine, such as a Titan, would dare to face one in single combat.',
        troopTitleTwo: 'Ogryns',
        troopDescriptionTwo: 'Ogryns (Homo Sapiens Gigantus) are the largest and most physically powerful type of abhuman. They make ideal warriors and are often recruited into Imperial Guard regiments, and used as close assault shock troops. Ogryns evolved on worlds with harsh and barren environments and high gravity. Most of these worlds, having no other use to humanity, were originally used as prison planets. Ogryns are large and bulky, standing between 2½ and 3 metres tall. Ogryns vary in appearance according to world, but all are tough and powerful. Some forms are well-muscled, while others tend more towards grotesque obesity.',
        troopTitleThree: 'Thunderbolt',
        troopDescriptionThree: 'The Thunderbolt heavy fighter is the workhorse of the Imperial Navy. A rugged and reliable design, with good firepower and maneuverability, the Thunderbolt has been in service for centuries and remains well-liked by its crews. The Thunderbolt primarily serves as an air superiority fighter, given the task of hunting down enemy bombers or engaging enemy fighters in order to establish air superiority over the battlefield. However one of the chief advantages of the design is its versatility, allowing it to fulfill other types of missions.',
    },

    {
        factionName: 'Orks',
        summary: "Orks are a warlike, crude, and highly aggressive green-skinned Xenos race. Orks are the dominant subspecies of the Orkoids, which includes the smaller Gretchin and Snotlings. Although their society is entirely primitive and brutal, the Orkoid race is also the most successful species in the whole Galaxy, outnumbering possibly every other race. However, due to their aggressive and warlike nature, this massive race is split into hundreds of tiny empires, warring as much between themselves as against other races. In the purely theoretical event all the Orks were to unite, they would undoubtedly crush all opposition. ",
        troopTitleOne: 'Warboss',
        troopDescriptionOne: 'The Warboss is the highest position in a large Ork Waaagh!; he is always the biggest, strongest and most cunning Ork in any given grouping of such creatures, and gets the best armour, weapons, and equipment.He is easily distinguishable from his brethren because of his bossy nature and tendency to be over 3 meters tall. As a general rule of thumb, the more successful a Warboss is, the larger he is.',
        troopTitleTwo: 'Ork Boyz',
        troopDescriptionTwo: "Ork Boyz are about 2 metres tall when standing fully upright and vary greatly in their specific battlefield roles. Ork Boyz who occupy the same field of interest often band together in groups known as Mobs, these mobs are led by an Ork Nob who epitomises the group's skills. As basic Ork troops, Ork Boys vary in weaponry and equipment. They are usually divided into the following categories.Note that Ork Boy can fall into several categories, for example, if he is equipped with Shoota, 'Eavy Armour and Stikkbomms and rides into battle on a Trukk he would be a Shoota Boy, a Stikk Bomma, 'Ard Boy and Trukkboy at the same time. ",
        troopTitleThree: 'Ork Nobs',
        troopDescriptionThree: "Nobz are the larger Ork boyz who are still smaller than the Warboss of a tribe, but are able to exert their authority upon their peers through their sheer size and commanding, if brutish, nature. The term 'Nob' is believed to be short for a parody of the Gothic word 'Nobles', but pronounced by the guttural Orkish throats as 'Knobs'. They usually get the best pick of the weapons and armour whenever the mob comes across anything worth taking. Nobs are usually found barking orders to mobs of boyz, but its not uncommon to find them in elite squads of their own, or forming the bodyguard for the Warboss, where they will probably in squads of Meganobz.",
    },

    {
        factionName: 'Chaos',
        summary: 'The Chaos Gods, also called the Dark Gods or the Ruinous Powers, are powerful beings of the psychic universe known as the Warp, created and sustained by the emotions and souls of every living being of the material universe. Although they are god-like beings, they are by their nature monomaniacal and completely single-minded as well as being completely dependent on the emotions of mortal creatures for their power and continued existence. ',
        troopTitleOne: 'Chaos Space Marines',
        troopDescriptionOne: 'Within the confines of the hellish zone of the Galaxy known as the Eye of Terror, the banished Chaos Space Marines, along with their exiled allies and slaves, have created their own Imperium of Chaos. In the most Chaos-saturated region of the galaxy, few in the ten thousand years of their exile have escaped mutation in some form. Within the Eye, the legions fight among themselves for gene-seed, resources, slaves, or for the greater glory of the Chaos Gods. The legions however are far more driven by their hatred of the Imperium than by internecine rivalry. From the Eye, the forces of Chaos Marines emerge to exact their vengeance upon the Imperium, continuing the Long War they begun ten thousand years ago.',
        troopTitleTwo: 'Deamons',
        troopDescriptionTwo: 'Daemons are the creation of the Gods of Chaos, formed from their own essences. Of a somewhat different nature than their masters, they are the most numerous of the Warps inhabitants and are thought to be near-infinite in number. A Daemon is "born" when a Chaos God expends a portion of its power to create a separate being, binding a collection of senses, thoughts, and purposes together. This essentially creates a consciousness and personality that can move within the Warp. The Chaos God can reclaim this form at any time, and this ensures the loyalty of the Daemon. Not all Daemons act entirely in accord with their masters, but even the greatest of them would not dare outright defiance. Though it may appear to be made of matter in the Materium, within the Warp a Daemon is no more physical than the rest of the Realm of Chaos.',
        troopTitleThree: 'Chaos Cultists',
        troopDescriptionThree: 'All planets and civilisations belonging to the Imperium can harbour Chaos organisations, which themselves are as diverse in practice and membership as is imaginable. From the blood-soaked sacrificial cults of feral worlds to the philosophical secret societies of more advanced worlds, the temptations of Chaos can capture all. Indeed, according to the Ordo Hereticus, Chaos Cults can arise from any class of Imperial society, be it impoverished, noble, hive-gang, abhuman, soldiers, or mutant. The objective of the Chaos Cult is to survive and eventually dominate the society. Mere survival is particularly important on Imperial worlds, where Chaos worship is the greatest of heresies and Inquisitors are always vigilant and ready to wipe out any taint of Chaos.',
    },

    {
        factionName: 'Tyranids',
        summary: 'The exact origin of the Tyranids themselves is unclear, save the fact that they are not of The Galaxy and have only recently arrived here after traveling countless millennia in the intergalactic void. It is unknown which galaxy they originated from, or for how long the Tyranid race has been on its genocidal rampage, but it is believed that it is the Astronomican that is drawing the Tyranid Hive Fleet to threaten the galaxy.  Indeed their very name is but a title given to them by the Imperium, named after the planet where they were first encountered (Tyran). It is possible that they have been preying on other galaxies since time immemorial.  According to another source, they have consumed one thousand galaxies and are responsible for the annihilation of millions of intelligent species.',
        troopTitleOne: 'Hive Tyrant',
        troopDescriptionOne: 'Hive Tyrants are monstrous Tyranid creatures created to be commanders of the Tyranid swarm. They embody the Hive Mind completely and act as the primary Synapse conduit through which it enforces its will over lesser Tyranid creatures. Hive Tyrants are extremely powerful, large and strong monsters three times the height of a man that can tear through plasteel or ferrocrete as if they were glass. They excel in both close combat and ranged fighting, and in fact every part of their body is perfectly designed to maim and kill. They are highly mutable, with individual Hive Tyrants displaying a wide range of physical characteristics, biomorphs, and bio-weapons',
        troopTitleTwo: 'Warriors',
        troopDescriptionTwo: 'Tyranid Warriors are large creatures, although significantly smaller than the massive Hive Tyrants. They are fast and powerful, with the capability to be strong at ranged combat or in close quarters in a similar fashion to the Hive Tyrant. Tyranid Warriors are the most adaptable of all the Hive Mind’s bioforms. They are creatures from the blackest of nightmares, unstoppable killing machines with pulsing ichor for blood, needle-sharp teeth and darkly gleaming eyes that reveal a terrible intelligence at work. A Tyranid Warrior stands twice the height of a man, its carapace protected by a thick chitin. One might expect such a creature to be slow in its actions, but a Tyranid Warrior is lithe, with reactions as swift as a whip. Tyranid Warriors have the mental flexibility to employ a wide variety of bio-weapon symbiotes.',
        troopTitleThree: 'Carnifex',
        troopDescriptionThree: "Carnifexes excel at thunderous charges, where their immense bulk is used to crush or smash through any opponent or obstacle. They are not as swift as other Tyranid creatures but their brute force more than makes up for this. A Carnifex's stampede takes time to build force as their incredible alien musculature strains to propel it forward. As it builds momentum and reaches top speed, the ground shakes with each stride of the monster and foes are scattered or trampled before it, and only fortress walls or Super Heavy Tanks have any chance of surviving the ferocious impact.",
    },

]