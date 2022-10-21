var ctx = document.getElementById('content-layer').getContext('2d');

class txt {
    constructor(text,x,y,size,color){
        this.text = text;
        if(x === undefined) {
            this.x = 10;
        } else {
            this.x = x;
        }
        if(y === undefined) {
            this.y = 400;
        } else {
            this.y = y;
        }
        if(size === undefined) {
            this.size = 16;
        } else {
            this.size = size;
        }
        if(color === undefined){
            this.color = 'black';
        } else {
            this.color = color;
        }
    }
}

class qsn {
    constructor(q,a1,a2,a3,a4,correcta){
        this.q = q;
        this.answers = [a1,a2,a3,a4];
        this.correcta = correcta;
    }
}

firststart = true;
questionmode = false;
allowback = true;

const texts = [
new txt("Welcome to my game! In this game you will learn about the macromolecules in your cells! You will learn how they look, are formed, used, and much more. I hope you enjoy! Press any button to continue."),
new txt("This is a simplified version of a cell. As you can see, there are many organelles and systems in the cell that keep this system running."),
new txt("However, all this is run almost entirely with four main types of organic (carbon-based) molecules; the macromolecules! These are:"),
new txt("Nucleic Acids"),
new txt("Proteins"),
new txt("Lipids"),
new txt("And Carbohydrates!"),
new txt("Together these 4 macromolecules make up all the cells in your body, interacting with each other in unique ways to form your body and bodily processes!"),
new txt("So let’s explore these macromolecules, starting with nucleic acids."),
new txt("A large amount of nucleic acids in all Eukaryotic cells reside in the cell’s nucleus. That’s what nucleic acids are named after!"),
new txt("There are two main types of nucleic acids, RNA and DNA. "),
new txt("DNA is the nucleic acid most often situated within the nucleus, and so that is where we shall start. DNA stands for Deoxyribonucleic Acid. You’ll find out why soon!"),
new txt("DNA stores genetic information for your body. This information decides how your body forms, runs, and functions. More specifically however, DNA codes for the making of proteins. (This will be explored in greater detail later)"),
new txt("All macromolecules are made up of smaller units called monomers. In DNA, its monomer is a nucleotide!"),
new txt("In macromolecules, many of these monomers link together to form a polymer. DNA and RNA are both nucleic acid polymers."),
new txt("Notice the prefixes of each term; monomer contains the prefix “mono”, which means one, while “poly” in polymer refers to many. For both of them, “mer” means part(s). Thus, monomer means “one part”, and polymer means “many parts”!"),
new txt("Each nucleotide (again, that’s the monomer) consists of 3 parts;"),
new txt("A phosphate group"),
new txt("A 5-carbon sugar, either ribose or deoxyribose which contains less oxygen."),
new txt("This sugar is a big determinant of whether it is DNA or RNA. RNA stands for RiboNucleic Acid, and thus contains Ribose, and DNA stands for DeoxyriboNucleic Acid, and thus contains Deoxyribose!"),
new txt("Finally, at the end of every nucleotide is a base. The base is what determines which nucleotide it is."),
new txt("In order for nucleotides to link together and form a polymer, they must form bonds. Now the type of bond depends on the type of macromolecule, but in Nucleic Acids this bond is a phosphodiester bond, which links the phosphate group of one nucleotide to the sugar of another."),
new txt("In both DNA and RNA there are four bases. In DNA these bases are Adenine, Guanine, Cytosine and Thymine. In RNA however, the Thymine is replaced with Uracil."),
new txt("Each of these bases pairs up with another; in both Guanine pairs with Cytosine, but in DNA Adenine pairs with Thymine, whereas in RNA it pairs with Uracil. "),
new txt("These bases pair together with hydrogen bonds, which occur between oxygen and hydrogen."),
new txt("So let's do a little quiz before we move on to the next part! (Warning, once you’re on the questions you can’t look back! Press the left arrow to review.)(press 1,2,3, or 4 to answer the question)"),
0,
1,
2,
3,
4,
5,
6,
7,
8,
new txt("Good job, that was your first test! You will see your results at the end of the game."),
new txt("So, how does DNA code for proteins?"),
new txt("Well, the secret lies in one thing; Codons! Amino Acids are the monomers of proteins, and codons are specific sequences of nucleotides that code for specific amino acids."),
new txt("Proteins are a huge component of how our bodies work and function; they make up structures, carry out functions as enzymes (such as putting together and breaking down molecules), protect our bodies from bacteria and viruses as antibodies, and much more."),
new txt("For example, the sequence AGA (Adenine Guanine Adenine) codes for the amino acid Arginine."),
new txt("Now following this concept, we would find that there are 64 possible codons. But there are only 20 amino acids in our bodies. Thus, each amino acid has a few codons that code for it (except tryptophan, who only has UGG). Also, some codons code for the end and beginning of proteins."),
new txt("So why don’t you build your own genetic code? It’ll just be a short sequence, but with enough pieces (nucleotides) you can make something big! Remember that you need 3 bases for each codon."),
new txt("[Game1]"),
new txt("So how does this get turned into a protein? Let’s find out!"),
new txt("First the genetic information is copied onto a type of RNA, messenger RNA."),
new txt("This mRNA carries the information to a ribosome, the location of protein synthesis (making) in cells."),
new txt("There, another type of RNA, rRNA (the r stands for ribosomal), converts the codons from the mRNA into a sequence of amino acids!"),
new txt("These amino acids are supplied by the third and final type of RNA, transfer RNA (tRNA)."),
new txt("So what does your protein look like?"),
new txt("[Show Protein]"),
new txt("As you can see, each of the amino acids coded for by your codons link together into a single protein!"),
new txt("Each amino acid is made up of a central carbon atom, a hydrogen atom an Amino group containing nitrogen, a hydroxyl group, and an R group or side chain that determines which one of the 20 amino acids it is!"),
new txt("(Note: There are more than 20 amino acids, however there are 20 that are generally accepted as the most common in humans and most other organisms. So going forward whenever it is referred to as there being 20 amino acids, please take it with a grain of salt.) “red”"),
new txt("These amino acids are held together by another type of bond, a peptide bond. "),
new txt("The process of forming any bond in macromolecules is called dehydration synthesis. It is called this because in order for the bond to form, a water molecule (H2O) must be released."),
new txt("Together, many of these amino acids bonded together can form long polypeptide chains (think of poly - many - and peptide bonds, so many peptide bonds) that carry out monumental tasks throughout the body, such as hemoglobin which carries oxygen through your bloodstream and keratin that makes up much of your hair and nails."),
new txt("But your protein didn't look very interesting or useful, did it? It just looked like a line! Well that's because in order to do it's job the protein must fold into a functional shape. This is because with proteins, the sequence of amino acids isn’t enough; it’s the exact shape of the protein that determines its function."),
new txt("For example, most structural proteins like keratin and actin are long and fibrous, able to withstand pressure and tension, thus acting as effective structural components."),
new txt("On the other hand, many proteins that perform functions like hemoglobin and many enzymes are globular in shape (more round), as it is how they interact with other molecules that is important."),
new txt("The sequence of amino acids of a protein are considered its primary structure. Next is the secondary structure."),
new txt("The secondary structure consists of smaller-scale structures and interactions between individual amino acids. The two most common structures of this type are alpha-helices and beta-sheets."),
new txt("Alpha helices occur when a polypeptide chain curls up on itself in a spiral fashion. The R group of each amino acid forms a hydrogen bond with the hydrogen atom of an amino acid above or below it on the chain, forming a helix shape."),
new txt("On the other hand, a beta pleated sheet is formed when parallel chains of amino acids bond weakly with one another, again through hydrogen bonds. Again the R groups bond with hydrogen atoms, but this time the amino acids are in long lines that curl back and forth periodically."),
new txt("Together, those two main structures form the secondary structure of proteins. However, there are two other levels."),
new txt("The tertiary structure of proteins is the overall folding of the peptide chain and structures created by the secondary structure. Many factors play a role in this, such as the polarity of amino acids, as often hydrophobic (insoluble in water) amino acids will gravitate toward the center of a globular protein while hydrophilic (greek for “water loving”, soluble in water) ones will gravitate toward the outside. However there are many other factors that determine the tertiary structure of proteins.", 10, 335),
new txt("Finally, the quaternary structure (which only occurs in some proteins) is the interactions between multiple polypeptide chains. For example, hemoglobin actually consists of four polypeptide chains that interact with each other to form a single protein."),
new txt("All right, time for the second test! Again, review now if you need to!"),
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20,
21,
22,
23,
new txt("Another quiz well done! Although I don’t know your score, I’m sure you did great!"),
new txt("So let's look at an example of one function proteins can serve."),
new txt("Proteins can exist in the cell membrane, the border separating the cell from the environment or other cells."),
new txt("The cell membrane is made up of phospholipids, a type of lipid. Lipids are another type of macromolecule, which serve many functions including making up the cell membrane. They will be described in greater detail later."),
new txt("Now proteins in the cell membrane can have many jobs, but one of these is helping in the transport of molecules in and out of the cell."),
new txt("Such proteins allow the cell to be selectively permeable. In other words, due to these proteins our cells can decide what they want to go in or out of them."),
new txt("For example, this is GLUT-4, a protein that transports glucose. "),
new txt("Glucose enters through the top (labeled “Extracellular”), binds to the glucose binding site, and the protein transports it into the cell (labeled “Cytoplasm”, Cytoplasm is the water-based substance that cell’s organelles and everything else reside in). But how does the protein get the energy to do this?"),
new txt("Well the energy required for the protein to move comes from a particular molecule called Adenosine Triphosphate, or ATP for short."),
new txt("ATP is used in almost all cellular processes to provide energy to proteins. As it shows in the diagram, the ATP molecule bonds at a bonding site."),
new txt("At the binding site, one of the three phosphate groups (note, TRIphosphate, three) breaks off, releasing mechanical energy. This energy is then utilized by the protein to do its job."),
new txt("But how is ATP made? "),
new txt("ATP is mainly produced in lysosomes. Lysosomes are the cell organelle that breaks down macromolecules like proteins and nucleic acids, but importantly carbohydrates and lipids."),
new txt("Both lipids and carbohydrates provide energy for the production of ATP, but they do so in different ways. Let's start with carbohydrates."),
new txt("The monomer of carbohydrates is monosaccharides (once again, “mono” = one), or simple sugars."),
new txt("Carbohydrate’s monosaccharides bond with glycosidic bonds, and can bond in many different ways to form many types of carbohydrates."),
new txt("There are unbonded monosaccharides, like glucose."),
new txt("There are disaccharides, consisting of two monosaccharides bonded together, such as sucrose and maltose."),
new txt("There are trisaccharides consisting of three monosaccharides,"),
new txt("And there are polysaccharides like starch and cellulose, which consist of long chains of monosaccharides."),
new txt("Here, try it out:"),
new txt("[Game2]"),
new txt("In order to obtain energy from carbohydrates, these bonds are broken through a reaction called hydrolysis (hydro means water, lysis means to break; thus, to break with water). Hydrolysis, also known as a condensation reaction, is the opposite of Dehydration Synthesis; instead of water being removed from the chain, it is put back into it, breaking the monomers apart and releasing energy.",10,220),
new txt("Lipids also release energy in hydrolysis, but they release more due to their higher amount of carbon. This is why carbohydrates often act as short-term energy for our bodies, and lipids act as long-term energy."),
new txt("Lipids are also unlike all the other macromolecules in that they have multiple monomers! The monomers of lipids are glycerol and fatty acids."),
new txt("These monomers are bound together by Ester bonds, which as previously mentioned release large amounts of energy when broken through hydrolysis."),
new txt("Like carbohydrates, the number of monomers determines what kind of lipid it is. One fatty acid makes it a monoglyceride (unlike carbohydrates, this still requires a bond), two makes a diglyceride, and with three fatty acids attached to the glycerol you make the most common type of lipid for energy storage, a triglyceride."),
new txt("While all that may seem a bit confusing, try it out!"),
new txt("[Game3]"),
new txt("In food, there are also a few types of lipids depending on the shape and type of fatty acids. "),
new txt("There are saturated fatty acids, which make up saturated fats and are generally solid at room temperature. This is because saturated fatty acids do not contain any double bonds, thus no kinks in the carbon chain, allowing for them to be densely packed."),
new txt("On the other hand there are unsaturated fats, which are generally liquid at room temperature. This is because unsaturated fatty acids contain double bonds, which creates kinks in the carbon chain, and makes them pack less densely. Unsaturated fats are considered healthier than saturated fats."),
new txt("And finally there are trans fats, which are unsaturated fats turned into saturated fats through human engineering. These are considered extremely unhealthy."),
new txt("So that’s all for this game! I’m sorry I know it’s a lot of reading, but I hope you still enjoyed it! Just one final test and then you can see your score!"),
24,
25,
26,
27,
28,
29,
30,
31,
32,
33,
34,
35,
36,
37,
new txt("[Score]")
];
const questions = [
    new qsn("Q1: What are the small parts of macromolecules called?","Particles","Unipieces","Monomers","Nucleotides",2),
    new qsn("Q2: What about the long chains?","Polymers","Monomers","Superchain","Nucleic Acids",0),
    new qsn("Q3: What are the two main nucleic acids?","DNA and IDK","ATP and RNA","ATP and DNA","DNA and RNA",3),
    new qsn("Q4: What is the monomer of nucleic acids?","Amino Acids","Nucleotides","Monkeys","Nucleobits",1),
    new qsn("Q5: Which is NOT part of a nucleic acid monomer?","Hydroxyl Group","Phosphate Group","5-carbon Sugar","Base",0),
    new qsn("Q6: Which sugar is in monomers of DNA? (Remember what DNA stands for!)","Ribose","Glucose","Deoxyribose","Fructose",2),
    new qsn("Q7: What is the link between nucleotides called?","Ester", "Phosphodiester","Glycosidic","Peptide",1),
    new qsn("Q8: Where is most DNA located in Eukaryotic cells?","Mitochondria","Ribosomes","Outside","Nucleus",3),
    new qsn("Q9: What base does Guanine(G) bond with?","Cytosine","Adenine","Thymine","Itself",0),
    new qsn("Q1: What is the monomer of proteins?","Nucleic Acids","Monoprotide","Amino Acids","Fatty Acids",2),
    new qsn("Q2: What codes for amino acids in DNA and RNA?","Codons","Codals","Planors","Uracil",0),
    new qsn("Q3: How many amino acids are there?","12","100","10","20",3),
    new qsn("Q4: What determines the type of amino acid?","Carboxyl Group","Amino Group","Hydrogen","R Group",3),
    new qsn("Q5: What is a bond between amino acids called?","Peptide","Protide","Glycosidic","Ester",0),
    new qsn("Q6: How does this bond form?","Hydrolysis","Dehydration","Rehydration","WATER",1),
    new qsn("Q7: What is a long chain of amino acids called?","Polypeptide","Antimonide","Polyprotide","Superchain V2",0),
    new qsn("Q8: What determines the function of a protein?","Color","Just Amino Acids","Shape","Size",2),
    new qsn("Q9: How many levels of structure do proteins have?","2","4","5","10",1),
    new qsn("Q10: What is the primary structure of proteins?","Sequence of AAs","Overall Folding","Local Structures","Multiple Chains",0),
    new qsn("Q11: What is the secondary structure of proteins?","Sequence of AAs","Overall Folding","Local Structures","Multiple Chains",2),
    new qsn("Q12: What do alpha helices look like?","Swords","Spirals","Stairs","Flat",1),
    new qsn("Q13: What type of bond holds a-helices and B-sheets together?","Ester","Peptide","Double","Hydrogen",3),
    new qsn("Q13: What is the tertiary structure of proteins?","Sequence of AAs","Overall Folding","Local Structures","Multiple Chains",1),
    new qsn("Q14: What is quaternary structure?","Sequence of AAs","Overall Folding","Local Structures","Multiple Chains",3),
    new qsn("Q1: What function do carbohydrates serve?","Long-term Energy","Enzymes","Short-term Energy","Information",2),
    new qsn("Q2: What is the monomer of carbohydrates?","Polysaccharides","Monosaccharides","Unisaccharades","Single Sugars",1),
    new qsn("Q3: What type of bond do carbohydrates have?","Glycosidic","Peptide","Hydrogen","Phosphodiester",0),
    new qsn("Q4: What type of molecule is starch?","Protein","Monosaccharide","Polysaccharide","Triglyceride",0),
    new qsn("Q5: Name one monomer of lipids.","Amino Acid","Fatty Acid","Nucleic Acid","Fat",1),
    new qsn("Q6: Name the other monomer of lipids.","Oil","Glycerol","Glycocine","Uracil",1),
    new qsn("Q7: The bond in lipids is between the:","Fatty Acids","Glycerols","Fatty Acids and Glycerol","Sugars",2),
    new qsn("Q8: What is this bond called?","Ester","Phosphodiester","Hydrogen","Lipidic",0),
    new qsn("Q9: A fatty acid has two double bonds in it. What kind of fat is it?","Curled","Saturated","Trans","Unsaturated",3),
    new qsn("Q10: What state of matter would this lipid be at room temperature?","Solid","Liquid","Gas","Plasma",1),
    new qsn("Q11: What is the process of breaking apart polymers with water called?","Polysis","Aqualysis","Dehydration","Hydrolysis",3),
    new qsn("Review: What base does Thymine pair with?","Guanine","Cytosine","Adenine","Thymine",2),
    new qsn("Review: What kind of bond is between amino acids?","Glycosidic","Protide","Ester","Peptide",3),
    new qsn("Review: What molecule is released in dehydration synthesis?","Water","Methane","Carbon Dioxide","Hydrogen Peroxide",0)
];
results = [];

sequence = [];
const codons = [[[1,1,1,1],[2,2,3,3],[4,4,4,4],[5,5,5,5]],[[6,6,7,7],[8,8,9,9],[10,10,10,10],[11,12,12,12]],[[6,6,6,6],[13,13,14,14],[15,15,15,15],[16,16,16,16]],[[17,21,18,18],[21,21,19,19],[7,7,7,7],[16,16,20,20]]];
const aanames = ["Glycine","Glutamic Acid","Aspartic Acid","Alanine","Valine","Argenine","Serine","Lysine","Asparagine","Threonine","Methionine","Isoleucine","Glutamine","Histidine","Proline","Leucine","Triptophan","Cysteine","Tyrosine","Phenylalanine","stop"]

sacchlist = [];
const monosacchnames = ["Glucose","Fructose","Galactose"];
const disacchnames = ["Maltose","Sucrose","Lactose"];

lipidtype = 0;
const lipidnames = ["Glycerol","Monoglyceride","Diglyceride","Triglyceride"]

index = 0;

function start() {
    if(firststart){
        firststart = false;
        document.getElementById('startbtn').innerText = "Restart Game";
    }
    index = 0;
    results = [];
    sequence = [];
    sacchlist = [];
    lipidtype = 0;
    game();
}

function game() {
    changepic(index);
    ctx.clearRect(0,0,500,500);
    if(texts[index].text === undefined) {
        question = questions[texts[index]];
        ctx.fillStyle = 'black';
        ctx.font = "bold 20px sans-serif";
        finaltext = processText(question.q,20,10)
        for(var c = 0; c < finaltext.length; c++) {
            ctx.fillText(finaltext[c], 20, 50 + (c * 20));
        }
        ctx.font = "bold 12px sans-serif";
        for(var c = 0; c < 4; c++) {
            ctx.fillStyle = 'black';
            ctx.fillText(question.answers[c],c * 130 + 55 - (question.answers[c].split("").length * 3), 400);
            ctx.fillStyle = 'rgba(250, 0, 100, 0.75)';
            ctx.beginPath();
            ctx.arc(c * 130 + 55, 425, 10, 0, Math.PI * 2, true);
            ctx.fill();
        }
        if(results[texts[index]] !== undefined) {
            if(results[texts[index]] === 1) {
                ctx.fillStyle = 'green';
                ctx.font = "bold 20px sans-serif";
                ctx.fillText("Correct!",200,475)
            } else {
                ctx.fillStyle = 'red';
                ctx.font = "bold 20px sans-serif";
                ctx.fillText("Incorrect.",200,475)
            }
        } else {
            questionmode = true;
        }
        allowback = false;
    } else {
        if(texts[index].text.includes("[")) {
            if(texts[index].text === "[Game1]"){game1()
            } else if(texts[index].text === "[Game2]"){game2()
            } else if(texts[index].text === "[Game3]"){game3();lipidtype=0;
            } else if(texts[index].text === "[Score]"){score()};
            if(texts[index].text !== "[Score]"){gametick(index)};
        } else {
            ctx.fillStyle = texts[index].color;
            ctx.font = "bold " + texts[index].size + "px sans-serif";
            finaltext = processText(texts[index].text,texts[index].size,texts[index].x)
            for(var c = 0; c < finaltext.length; c++) {
                ctx.fillText(finaltext[c], texts[index].x, texts[index].y + (c * texts[index].size));
            }
            allowback = true;
        }
    }
}

function answerQuestion(n) {
    if(n === questions[texts[index]].correcta) {
        results[texts[index]] = 1;
    } else {
        results[texts[index]] = 0;
    }
    game();
    questionmode = false;
}

function game1() {
    hitboxes = [new hitbox(90,400,20,80,false,'red'),new hitbox(190,400,20,80,false,'yellow'),new hitbox(290,400,20,80,false,'green'),new hitbox(390,400,20,80,false,'blue')]
}

function game2() {
    hitboxes = [new hitbox(125,400,50,50,false,'red'),new hitbox(225,400,50,50,false,'yellow'),new hitbox(325,400,50,50,false,'green')]
}

function game3() {
    hitboxes = [new hitbox(90,220,20,60,false,'yellow')]
}

function score() {
    var gamescore = results.reduce((total, curr) => total + curr);
    if(gamescore > 30) {
        ctx.fillStyle = 'green';
    } else if(gamescore > 20) {
        ctx.fillStyle = 'black';
    } else {
        ctx.fillStyle = 'red';
    }
    ctx.font = "bold 20px sans-serif";
    ctx.fillText(gamescore + " / 38", 230, 39);
    ctx.fillStyle = 'black';
    ctx.font = "bold 12px sans-serif";
    for(s = 0; s < questions.length; s++) {
        ctx.fillText(questions[s].q, 40, s * 11.5 + 68);
        ctx.fillText(results[s], 20, s * 11.5 + 68)
    }
}

function processText(text, size, x) {
    var outext = [];
    var temptext = text.split(" ");
    var b = 1000;
    var line = "";
    for(var a = 0; a < temptext.length; a++) {
        b += temptext[a].split("").length + 1;
        if(size * b + x >= 1000) {
            outext.push(line);
            line = temptext[a];
            b = temptext[a].split("").length;
        } else {
            line += " " + temptext[a];
        }
    }
    outext.push(line);
    return outext;
}

document.onkeydown = function(key) {
    if(firststart === false) {
        if(questionmode) {
            if(key.which > 48 && key.which < 53) {
                answerQuestion(key.which - 49);
            }
        } else {
            if(key.which == 82) {
                start();
            } else if(key.which == 37) {
                if(index > 0 && allowback) {
                    index--;
                    game();
                }
            } else {
                if(index < texts.length - 1) {
                    index++;
                    game();
                }
            }
        }
    }
}




function extrabits() {
ctx.fillStyle = 'rgba(200, 0, 0)';
ctx.fillRect(10, 10, 100, 100);

ctx.strokeStyle = 'rgba(100,200,0)'
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(200, 300);
ctx.stroke();
}