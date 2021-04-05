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

 let talkingHeadGreet =
 "Greetings commander... you have been assigned to the defence of the planet OMACRON DONACUS 32... you will need to choose which of the Imperiums armys will command to defend it...";
 let talkingHeadGreetTwo =
 "Unfortunatley we only have the resourses to deploy one of the imperial factions... choose wisley not all forces are created equal...";
 let talkingHeadEnemy = 
 "Now you have selected your army we you need to decided what enemy we shall face... all are of equal importance but some may be harder to defeat than others...";
 let talkingHeadGame = 
 "Welcome to the battle screen commander... here you can see the enemys actions and what tactics are avaliable to counter them...";
 let talkingHeadGameTwo = 
 "Be aware... once you decide a plan of action it could have dire consequences... For the Emperor!...";

 /* Game Objects */

 const spaceMarineHealth = 125;

 const adMechHealth = 100;

 const guardHealth = 75;

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
        choiseOnePower: 30,
        choiceTwo: 'Dig in the troops and deploy our heavy weapons teams to hold back the tide.',
        choiseTwoPower: 50,
        choiceThree: 'Bolster the line at key points using Dreadnoughts.',
        choiseThreePower: 40,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'Engage them in melee to slow them down and allow us to reform the line with our reserves.',
        choiseOnePower: 50,
        choiceTwo: 'Pull back inside the city and allow the citys automated defences to thin the horde.',
        choiseTwoPower: 60,
        choiceThree: 'Send our initiates to plug the gaps and prove themselves.',
        choiseThreePower: 30,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Teleport our elite terminators directley into the Warbosses path and destory him.',
        choiseOnePower: 80,
        choiceTwo: 'Send infiltrators to find and elimnate him at range.',
        choiseTwoPower: 50,
        choiceThree: 'Oblitrate him with a massive bombardment from our ships in orbit.',
        choiseThreePower: 60,
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
        choiseOnePower: 40,
        choiceTwo: 'Use your tanks and other heavy vehicles to whittle down thier numbers as your Skitarii fall back.',
        choiseTwoPower: 30,
        choiceThree: 'Send in bombers and other air assets to strafe thier forces with bombs. ',
        choiseThreePower: 30,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'Send in the Legio Titanica Titans to oblitiate them.',
        choiseOnePower: 80,
        choiceTwo: 'Send in the Vanguard reserves destory them with radiation',
        choiseTwoPower: 50,
        choiceThree: 'Set up crossfires using Rangers and thier sniper rifles',
        choiseThreePower: 40,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Have the rustalkers infiltrate and eliminate him.',
        choiseOnePower: 70,
        choiceTwo: 'Launch a spearhead into the enemy lines with the imperial knights aim right for the Warboss.',
        choiseTwoPower: 80,
        choiceThree: 'Launch a desperate counter attack with all ground forces you have to spare.',
        choiseThreePower: 50,
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
        choiseOnePower: 40,
        choiceTwo: 'Amass troops at vital location with numbers we shall hold them off.',
        choiseTwoPower: 30,
        choiceThree: 'Hold the outside of the city at all costs, many will die in the trenches.',
        choiseThreePower: 20,
    },

    {
        question: 'The Orks have broken through our lines in multiple areas how do we counter this threat?',
        questionPower: 80,
        choiceOne: 'An armoured counter attack with our remaining tanks will thrust them out of the city',
        choiseOnePower: 70,
        choiceTwo: 'Deploy our elite storm troops the Orks wont know what hit them. ',
        choiseTwoPower: 60,
        choiceThree: 'Shoot the men that are running away, the others will hold firm.',
        choiseThreePower: 80,
    },

    {
        question: 'The Ork Warboss has been seen on the battlefield leading his horde. Elimnating him will cause the Orks to scatter and end the battle.',
        questionPower: 100,
        choiceOne: 'Charge the Warboss with our mutant Ogryn thier massive guns and strength will wear him down.',
        choiseOnePower: 75,
        choiceTwo: 'Anhilate there Warbosses location with all artiliery batterys, nothing would be able to withstand that.',
        choiseTwoPower: 90,
        choiceThree: 'Lead the charge yourself, our faith in the emperor will see us through this.',
        choiseThreePower: 60,
    }
]