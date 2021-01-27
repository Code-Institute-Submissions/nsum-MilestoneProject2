/* If adding more images to the game upload them as 370x370 in PNG format, 
    and link to them, name them & describe them inside images array */
var images = [
    { src:'assets/images/puzzleImages/blueLagoon.png', title:'Blue Lagoon - Iceland', 
        text: `The Blue Lagoon (Icelandic: Bláa lónið) is a geothermal spa in southwestern Iceland. 
        The spa is located in a lava field near Grindavík and in front of Mount Þorbjörn on Reykjanes Peninsula, 
        in a location favourable for geothermal power, and is supplied by water used in the nearby Svartsengi 
        geothermal power station. The Blue Lagoon is approximately 20 km (12 mi) from Keflavík International Airport, 
        and is one of the most visited attractions in Iceland. The water's milky blue shade is due to its high 
        silica content which forms soft white mud on the bottom of the lake.`},
    { src:'assets/images/puzzleImages/blueLagoon2.png', title:'Blue Lagoon - Iceland', 
        text: `The Blue Lagoon (Icelandic: Bláa lónið) is a geothermal spa in southwestern Iceland. 
        The spa is located in a lava field near Grindavík and in front of Mount Þorbjörn on Reykjanes Peninsula, 
        in a location favourable for geothermal power, and is supplied by water used in the nearby Svartsengi 
        geothermal power station. The Blue Lagoon is approximately 20 km (12 mi) from Keflavík International Airport, 
        and is one of the most visited attractions in Iceland. The water's milky blue shade is due to its high 
        silica content which forms soft white mud on the bottom of the lake.`},
    { src:'assets/images/puzzleImages/halleForest.png', title:'Halle Forest - Belgium', 
        text: `The Hallerbos (Dutch for Halle forest also known in French as bois de Hal) is a forest in Belgium, 
        covering an area of 552 ha (1,360 acres). It is mostly situated in the municipality of Halle, in Flemish Brabant 
        and has also a little part in Walloon Brabant. The forest is known in the region for its bluebell carpet which 
        covers the forest floor for a few weeks each spring, attracting many visitors. Visitors can reach there either 
        by their own vehicle or through public transportation. For public transport, you can reach Halle Train station 
        and get a bus till the entry of the forest.`},
    { src:'assets/images/puzzleImages/mossSwamp.png', title:'Moss Swamp - Romania', 
        text: `Tinovul Mohoș is a protected area of national interest that corresponds to the 4th IUCN category 
        (floristic and faunal nature reserve), located in Harghita County, on the administrative territory of 
        Cozmeni commune. The nature reserve is located in one of the craters of the Ciomatu Massif - the extremely 
        southern extension of the volcanic chain of the Harghita Mountains, in the southwest of Lăzărești village 
        and immediately near Lake Sfânta Ana.`},
    { src:'assets/images/puzzleImages/plitvice1.png', title:'Plitvice Lakes - Croatia', 
        text: `Plitvice Lakes National Park (Croatian: Nacionalni park Plitvička jezera) is one of the oldest and 
        largest national parks in Croatia. In 1979, Plitvice Lakes National Park was added to the UNESCO World Heritage 
        register. The national park was founded in 1949 and is in the mountainous karst area of central Croatia, 
        at the border to Bosnia and Herzegovina. The important north–south road that passes through the national 
        park area connects the Croatian inland with the Adriatic coastal region.
        The protected area extends over 296.85 square kilometres (73,350 acres). About 90% of this area is part of 
        Lika-Senj County, while the remaining 10% is part of Karlovac County. Each year, more than 1 million visitors are recorded.`},
    { src:'assets/images/puzzleImages/plitvice2.png', title:'Plitvice Lakes - Croatia', 
        text: `Plitvice Lakes National Park (Croatian: Nacionalni park Plitvička jezera) is one of the oldest and 
        largest national parks in Croatia. In 1979, Plitvice Lakes National Park was added to the UNESCO World Heritage 
        register. The national park was founded in 1949 and is in the mountainous karst area of central Croatia, 
        at the border to Bosnia and Herzegovina. The important north–south road that passes through the national 
        park area connects the Croatian inland with the Adriatic coastal region.
        The protected area extends over 296.85 square kilometres (73,350 acres). About 90% of this area is part of 
        Lika-Senj County, while the remaining 10% is part of Karlovac County. Each year, more than 1 million visitors are recorded.`},
    { src:'assets/images/puzzleImages/tunnelOfLove.png', title:'Tunnel of Love - Ukraine', 
        text: `It’s one of the most photographed places in Ukraine. Visitors travel from around the world to 
        see the famous tree tunnel running through the small western town of Klevan. As RFE/RL’s Amos Chapple 
        discovered when he explored the site, Ukraine's “Tunnel of Love” can reportedly trace its origins all 
        the way back to the tensions and secrecy of the Cold War.`},
    { src:'assets/images/puzzleImages/yiliApricotValley.png', title:'Yili Apricot Valley - China', 
        text: `Far up in the north west of China lies the province of Xinjiang, and far up in the north west of 
        Xinjiang lies Yili. It’s incredibly remote, but that won’t stop you from wanting to go there once you see 
        their beautiful Apricot Valley. Take a look at the pictures below to see what we mean. Located in Tuergen 
        Township in Xinyuan County, close to the border of Kazakhstan, Apricot Valley has for years been attracting 
        intrepid tourists who are eager to catch a glimpse of the majestic sea of pink and white apricot blossom 
        that arrives every spring. The county has the largest apricot forest in Xinjiang and if you want to see it 
        for yourself then you’re in luck. Peak season runs from the start of June until the end of September, 
        so what are you waiting for? Get packing! But don’t forget to leave room for plenty of apricots.`},
    { src:'assets/images/puzzleImages/zakynthos.png', title:'Zakynthos - Greece', 
        text: `Navagio Beach (Greek: Ναυάγιο, pronounced [naˈvaʝio]), or Shipwreck Beach, is an exposed cove, 
        sometimes referred to as "Smugglers Cove", on the coast of Zakynthos, in the Ionian Islands of Greece. 
        Navagio Beach was originally known as Agios Georgios.
        On 2 October 1980, the coaster MV Panagiotis, ran aground in the waters around Zakynthos Island on 
        Navagio Beach during stormy weather and bad visibility. Some rumours claim the ship was smuggling contraband; 
        however official sources did not confirm this, and the captain was not convicted for such offences. In fact, 
        after the captain alerted the authorities, 29 locals were convicted of looting the cargo and valuable equipment 
        from the wrecked ship.[1] The ship was abandoned and still rests buried in the limestone gravel of the beach that 
        now bears the nickname Shipwreck. The beach was briefly closed in 2018, and swimming and boat anchoring were forbidden, 
        after a cliff collapse above the beach dropped a large amount of rock. The beach reopened and anchoring is permitted,
         but with restrictions out of concerns over future landslides.`},
];