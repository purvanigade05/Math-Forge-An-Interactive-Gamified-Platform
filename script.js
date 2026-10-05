// Math Forge — script.js

const q = (topic, question, options, answer, solution) => ({
    topic, question, options, answer, solution
});

const challenges = {
    permEasy: {
        title: "Permutations — Easy",
        description: "Build your fundamentals with direct permutation problems.",
        questions: [
            q("Permutation", "How many different 3-letter arrangements can be formed from A, B, C, D and E without repetition?", ["10", "20", "60", "125"], 2, ["There are 5 available letters.", "Three positions must be filled.", "Use permutations because order matters.", "5P3 = 5 × 4 × 3 = 60."]),
            q("Permutation", "In how many ways can 4 different books be arranged on a shelf?", ["12", "16", "24", "32"], 2, ["All four books are distinct.", "The number of arrangements is 4!.", "4! = 4 × 3 × 2 × 1 = 24."]),
            q("Permutation", "How many 2-digit numbers can be formed using 1, 2, 3, 4 and 5 without repetition?", ["10", "15", "20", "25"], 2, ["There are 5 choices for the first digit.", "There are 4 choices for the second digit.", "5 × 4 = 20."]),
            q("Permutation", "How many arrangements of 4 letters can be formed from 6 distinct letters without repetition?", ["120", "240", "360", "720"], 2, ["Use 6P4.", "6P4 = 6 × 5 × 4 × 3 = 360."]),
            q("Permutation", "Three positions are filled using 7 different people. How many arrangements are possible?", ["105", "210", "343", "504"], 1, ["Use 7P3.", "7 × 6 × 5 = 210."]),
            q("Factorial", "In how many ways can 5 distinct flags be arranged in a row?", ["60", "100", "120", "240"], 2, ["Arrange all 5 flags.", "5! = 120."]),
            q("Permutation", "How many 2-character codes can be made from 8 symbols without repetition?", ["28", "48", "56", "64"], 2, ["The first position has 8 choices.", "The second has 7 choices.", "8 × 7 = 56."]),
            q("Permutation", "How many 4-digit numbers can be formed from 1 to 7 without repetition?", ["420", "720", "840", "960"], 2, ["Use 7P4.", "7 × 6 × 5 × 4 = 840."]),
            q("Factorial", "How many ways can 5 distinct toys be arranged on a shelf?", ["20", "60", "120", "240"], 2, ["Arrange all five distinct toys.", "5! = 120."]),
            q("Permutation", "A club chooses a president, vice-president and secretary from 9 people. How many outcomes are possible?", ["84", "504", "729", "1008"], 1, ["The roles are distinct, so order matters.", "9P3 = 9 × 8 × 7 = 504."])
        ]
    },

    permModerate: {
        title: "Permutations — Moderate",
        description: "Solve arrangements involving restrictions and multiple steps.",
        questions: [
            q("Restricted Permutation", "How many arrangements of A, B, C, D and E are possible if A and B must always be together?", ["24", "36", "48", "60"], 2, ["Treat A and B as one block.", "Arrange 4 objects in 4! ways.", "The block has 2 internal arrangements.", "4! × 2! = 48."]),
            q("Circular Permutation", "In how many ways can 6 distinct people sit around a circular table if rotations are identical?", ["60", "120", "360", "720"], 1, ["Circular arrangements use (n−1)!.", "5! = 120."]),
            q("Restricted Permutation", "How many arrangements of A, B, C, D and E are possible if A cannot occupy the first position?", ["72", "84", "96", "120"], 2, ["Total arrangements = 5! = 120.", "With A first there are 4! = 24.", "Required = 120 − 24 = 96."]),
            q("Restricted Permutation", "How many arrangements of 5 people are possible if two particular people must not stand together?", ["48", "72", "96", "120"], 1, ["Total = 5! = 120.", "Together = 2 × 4! = 48.", "Required = 120 − 48 = 72."]),
            q("Block Method", "Seven distinct books are arranged with three particular books always together. How many arrangements are possible?", ["360", "720", "840", "1260"], 1, ["Treat the three books as one block.", "There are 5 objects, arranged in 5! ways.", "Arrange the block internally in 3! ways.", "5! × 3! = 720."]),
            q("Fixed Position", "Six people stand in a row. If a particular person must stand first, how many arrangements are possible?", ["60", "120", "240", "720"], 1, ["Fix the first person.", "Arrange the remaining five people.", "5! = 120."]),
            q("Block Method", "Six distinct letters include A and E, which must be adjacent. How many arrangements are possible?", ["120", "180", "240", "360"], 2, ["Treat A and E as one block.", "Arrange the resulting 5 objects in 5! ways.", "A and E can switch places in 2 ways.", "5! × 2 = 240."]),
            q("Restricted Arrangement", "Five distinct boys and four distinct girls are arranged in a row. If all girls must be together, how many arrangements are possible?", ["8640", "17280", "20160", "34560"], 1, ["Treat the four girls as one block.", "Arrange the block and five boys in 6! ways.", "Arrange the girls internally in 4! ways.", "6! × 4! = 17280."]),
            q("Number Formation", "How many 5-digit numbers can be formed from digits 0–5 without repetition?", ["480", "600", "620", "720"], 1, ["All arrangements of 5 out of 6 digits: 6P5 = 720.", "Arrangements starting with zero: 5P4 = 120.", "Required = 720 − 120 = 600."]),
            q("Fixed Positions", "Six people stand in a row. Two particular people must occupy the two ends. How many arrangements are possible?", ["24", "48", "72", "96"], 1, ["Arrange the two people at the ends in 2! ways.", "Arrange the remaining four people in 4! ways.", "2! × 4! = 48."])
        ]
    },

    permHard: {
        title: "Permutations — Difficult",
        description: "Advanced arrangement problems requiring restrictions and case analysis.",
        questions: [
            q("Restricted Permutation", "How many 6-digit numbers can be formed using 1–6 without repetition if 1 and 2 are not adjacent?", ["240", "360", "480", "600"], 2, ["Total = 6! = 720.", "Treat 1 and 2 as a block: 5! × 2! = 240.", "Required = 720 − 240 = 480."]),
            q("Repeated Permutation", "How many distinct arrangements can be formed using all letters of BANANA?", ["30", "60", "120", "180"], 1, ["There are 6 letters; A repeats 3 times and N repeats twice.", "Use 6!/(3!2!) = 60."]),
            q("Restricted Permutation", "Seven people are arranged in a row. Two particular people must not stand together. How many arrangements are possible?", ["2400", "3000", "3600", "4200"], 2, ["Total = 7! = 5040.", "Together = 6! × 2 = 1440.", "Required = 5040 − 1440 = 3600."]),
            q("Restricted Permutation", "Eight people stand in a row. Two particular people must not be adjacent. How many arrangements are possible?", ["20160", "30240", "40320", "35280"], 1, ["Total = 8! = 40320.", "Adjacent arrangements = 2 × 7! = 10080.", "Required = 40320 − 10080 = 30240."]),
            q("Restricted Permutation", "Seven distinct books are arranged so that two particular books are separated by at least one book. How many arrangements are possible?", ["2880", "3600", "4320", "5040"], 1, ["Total = 7! = 5040.", "Adjacent arrangements = 2 × 6! = 1440.", "Required = 5040 − 1440 = 3600."]),
            q("Circular Permutation", "Eight people sit around a circular table. Two particular people must sit together. How many arrangements are possible?", ["720", "1440", "2880", "5040"], 1, ["Treat the pair as a block.", "There are 7 units around the circle, giving 6! arrangements.", "The pair has 2 internal orders.", "2 × 6! = 1440."]),
            q("Number Formation", "How many 7-digit even numbers can be formed using 0–6 exactly once?", ["1800", "2160", "2520", "2880"], 2, ["If the last digit is 0, there are 6! = 720 arrangements.", "If the last digit is 2, 4 or 6, there are 5 × 5! = 600 per choice.", "Total = 720 + 3 × 600 = 2520."]),
            q("Restricted Permutation", "How many 5-letter strings can be formed from 8 distinct letters if the first letter must be one of 3 vowels?", ["1680", "2100", "2520", "3360"], 2, ["There are 3 choices for the first letter.", "Fill the remaining four positions from 7 letters: 7P4 = 840.", "Total = 3 × 840 = 2520."]),
            q("Combined Restrictions", "Eight people stand in a row. A and B must be together, while C and D must not be together. How many arrangements are possible?", ["6480", "7200", "8640", "10080"], 1, ["With A and B together: 2 × 7! = 10080.", "With both pairs together: 2 × 2 × 6! = 2880.", "Required = 10080 − 2880 = 7200."]),
            q("Circular Permutation", "Seven distinct people sit around a circular table. Two particular people must not sit together. How many arrangements are possible?", ["360", "420", "480", "600"], 2, ["Total circular arrangements = 6! = 720.", "Together = 2 × 5! = 240.", "Required = 720 − 240 = 480."])
        ]
    },

    combEasy: {
        title: "Combinations — Easy",
        description: "Practise basic selection and combination problems.",
        questions: [
            q("Combination", "A committee of 3 students is selected from 8 students. How many committees are possible?", ["24", "56", "336", "512"], 1, ["Order does not matter.", "8C3 = 8!/(3!5!) = 56."]),
            q("Combination", "How many ways can 2 students be selected from 6 students?", ["12", "15", "20", "30"], 1, ["Use 6C2.", "6C2 = 6 × 5 / 2 = 15."]),
            q("Combination", "How many subsets of size 3 can be selected from a set of 5 elements?", ["5", "10", "15", "20"], 1, ["Use 5C3.", "5C3 = 10."]),
            q("Combination", "How many ways can 2 people be selected from 10 people?", ["20", "45", "50", "90"], 1, ["Use 10C2.", "10 × 9 / 2 = 45."]),
            q("Combination", "How many committees of 4 can be selected from 7 people?", ["21", "28", "35", "42"], 2, ["Use 7C4 = 7C3.", "7 × 6 × 5 / (3 × 2 × 1) = 35."]),
            q("Combination", "How many ways can 2 fruits be selected from 9 different fruits?", ["18", "36", "72", "81"], 1, ["Use 9C2.", "9 × 8 / 2 = 36."]),
            q("Combination", "How many ways can 3 questions be chosen from 6 questions?", ["15", "20", "30", "36"], 1, ["Use 6C3.", "6C3 = 20."]),
            q("Combination", "How many ways can 5 people be selected from 7 people?", ["14", "21", "28", "35"], 1, ["Use 7C5 = 7C2.", "7 × 6 / 2 = 21."]),
            q("Combination", "How many pairs of vertices can be selected from 8 vertices?", ["16", "24", "28", "32"], 2, ["Choose 2 vertices from 8.", "8C2 = 28."]),
            q("Combination", "How many ways can no elements be selected from a set of 10 elements?", ["0", "1", "10", "20"], 1, ["There is exactly one empty subset.", "10C0 = 1."])
        ]
    },

    combModerate: {
        title: "Combinations — Moderate",
        description: "Solve conditional and multi-stage selection problems.",
        questions: [
            q("Combination", "A team of 4 is selected from 6 developers and 5 designers. It must contain exactly 2 developers. How many teams are possible?", ["100", "120", "150", "180"], 2, ["Choose 2 developers: 6C2 = 15.", "Choose 2 designers: 5C2 = 10.", "Total = 15 × 10 = 150."]),
            q("Combination", "How many ways can 5 students be selected from 9 if one particular student must be included?", ["56", "70", "84", "126"], 1, ["The required student is already included.", "Choose 4 from the remaining 8.", "8C4 = 70."]),
            q("Combination", "How many ways can 4 students be selected from 10 if at least one of two particular students must be selected?", ["140", "180", "196", "210"], 0, ["Total = 10C4 = 210.", "Selections containing neither particular student = 8C4 = 70.", "Required = 210 − 70 = 140."]),
            q("Combination", "Select 6 people from 5 men and 7 women. How many groups contain exactly 3 women?", ["280", "350", "420", "490"], 1, ["Choose 3 women from 7 and 3 men from 5.", "7C3 × 5C3 = 35 × 10 = 350."]),
            q("Combination", "How many groups of 4 can be selected from 8 people if at least one of 3 particular people must be included?", ["55", "60", "65", "70"], 2, ["Total = 8C4 = 70.", "Groups excluding all 3 particular people = 5C4 = 5.", "Required = 70 − 5 = 65."]),
            q("Combination", "Choose 5 people from 12, with exactly 2 chosen from a group of 4 engineers and the rest from 8 others. How many ways?", ["280", "336", "420", "560"], 1, ["Choose 2 engineers: 4C2 = 6.", "Choose 3 others: 8C3 = 56.", "Total = 6 × 56 = 336."]),
            q("Combination", "Choose 3 people from 9 if two particular people cannot both be selected. How many ways?", ["70", "77", "84", "91"], 1, ["Total = 9C3 = 84.", "Selections containing both particular people: choose 1 of the other 7.", "Required = 84 − 7 = 77."]),
            q("Combination", "A committee of 5 is chosen from 6 men and 4 women. How many committees contain at least 2 women?", ["156", "176", "186", "196"], 2, ["2 women, 3 men: 4C2 × 6C3 = 120.", "3 women, 2 men: 4C3 × 6C2 = 60.", "4 women, 1 man: 4C4 × 6C1 = 6.", "Total = 120 + 60 + 6 = 186."]),
            q("Combination", "Choose 4 people from 10 so that exactly one of two particular people is selected. How many ways?", ["96", "112", "120", "128"], 1, ["Choose which particular person: 2 ways.", "Choose 3 of the remaining 8 people: 8C3 = 56.", "Total = 2 × 56 = 112."]),
            q("Combination", "Choose 4 people from 9, selecting at least 1 and at most 2 from a particular group of 3. How many ways?", ["90", "100", "105", "110"], 2, ["Exactly 1 from the group: 3C1 × 6C3 = 60.", "Exactly 2 from the group: 3C2 × 6C2 = 45.", "Total = 60 + 45 = 105."])
        ]
    },

    combHard: {
        title: "Combinations — Difficult",
        description: "Advanced selection problems involving restrictions and complementary cases.",
        questions: [
            q("Restricted Combination", "How many ways can 5 students be selected from 10 if two particular students cannot be selected together?", ["196", "210", "252", "180"], 0, ["Total = 10C5 = 252.", "Selections containing both particular students = 8C3 = 56.", "Required = 252 − 56 = 196."]),
            q("Case Analysis", "A group of 5 is selected from 7 men and 6 women. How many groups contain at least 3 women?", ["531", "756", "826", "910"], 0, ["Three women and two men: 6C3 × 7C2 = 420.", "Four women and one man: 6C4 × 7C1 = 105.", "Five women: 6C5 = 6.", "Total = 420 + 105 + 6 = 531."]),
            q("Complementary Combination", "How many ways can 6 people be selected from 12 if at least one of three particular people must be included?", ["630", "672", "840", "924"], 2, ["Total = 12C6 = 924.", "Selections excluding all three particular people = 9C6 = 84.", "Required = 924 − 84 = 840."]),
            q("Case Analysis", "Choose 6 from 12 people, including at least 2 women from a group of 5 women and 7 men. How many groups are possible?", ["672", "756", "812", "840"], 2, ["2 women and 4 men: 5C2 × 7C4 = 350.", "3 women and 3 men: 5C3 × 7C3 = 350.", "4 women and 2 men: 5C4 × 7C2 = 105.", "5 women and 1 man: 7.", "Total = 812."]),
            q("Restricted Combination", "Choose 5 people from 9, with exactly 2 chosen from a particular group of 4. How many ways?", ["50", "60", "70", "80"], 1, ["Choose 2 from the group of 4: 4C2 = 6.", "Choose 3 from the other 5: 5C3 = 10.", "Total = 60."]),
            q("Restricted Combination", "Choose 6 from 10 people if at most one of three particular people can be selected. How many ways?", ["63", "70", "84", "105"], 1, ["Select none of the three: 7C6 = 7.", "Select one: 3C1 × 7C5 = 63.", "Total = 7 + 63 = 70."]),
            q("Case Analysis", "Choose 7 from 13 people, with at least 4 chosen from a group of 6 women and the rest from 7 men. How many groups?", ["588", "630", "658", "672"], 2, ["4 women, 3 men: 6C4 × 7C3 = 525.", "5 women, 2 men: 6C5 × 7C2 = 126.", "6 women, 1 man: 7.", "Total = 658."]),
            q("Restricted Combination", "Choose 5 from 10 people, with exactly 2 selected from a particular group of 4. How many ways?", ["100", "120", "140", "160"], 1, ["Choose 2 of the 4: 4C2 = 6.", "Choose 3 of the other 6: 6C3 = 20.", "Total = 120."]),
            q("Card Combination", "How many 5-card hands contain exactly 2 aces from a standard 52-card deck?", ["98280", "103776", "108160", "112896"], 1, ["Choose 2 of the 4 aces: 4C2 = 6.", "Choose 3 of the 48 non-aces: 48C3 = 17296.", "Total = 6 × 17296 = 103776."]),
            q("Combined Restrictions", "Choose 6 from 12, excluding the case where two particular people are both selected and requiring at least one of three other particular people. How many ways?", ["672", "700", "707", "714"], 2, ["Total excluding the forbidden pair = 12C6 − 10C4 = 714.", "Selections with none of the three required people and without the forbidden pair = 7.", "Required = 714 − 7 = 707."])
        ]
    },

    recEasy: {
        title: "Recurrence Relations — Easy",
        description: "Start with direct recurrence evaluation and sequence patterns.",
        questions: [
            q("Recurrence Relation", "Given a₀ = 3 and aₙ = aₙ₋₁ + 4, what is a₅?", ["19", "20", "23", "27"], 2, ["Start with a₀ = 3.", "Add 4 at each step.", "a₅ = 3 + 5 × 4 = 23."]),
            q("Recurrence Relation", "Given a₁ = 2 and aₙ = 2aₙ₋₁, what is a₄?", ["8", "12", "16", "32"], 2, ["a₁ = 2.", "a₂ = 4, a₃ = 8, a₄ = 16."]),
            q("Recurrence Relation", "Given a₀ = 1 and aₙ = aₙ₋₁ + 2n, what is a₃?", ["9", "11", "13", "15"], 2, ["a₀ = 1.", "a₁ = 3 and a₂ = 7.", "a₃ = 7 + 6 = 13."]),
            q("Recurrence Relation", "Given a₀ = 5 and aₙ = aₙ₋₁ + 3, find a₄.", ["14", "17", "20", "23"], 1, ["Add 3 four times to 5.", "a₄ = 5 + 4 × 3 = 17."]),
            q("Recurrence Relation", "Given a₁ = 3 and aₙ = aₙ₋₁ + 2, find a₆.", ["9", "11", "13", "15"], 2, ["There are five increments from a₁ to a₆.", "a₆ = 3 + 5 × 2 = 13."]),
            q("Recurrence Relation", "Given a₁ = 2 and aₙ = 3aₙ₋₁, find a₄.", ["18", "27", "54", "81"], 2, ["a₂ = 6.", "a₃ = 18.", "a₄ = 54."]),
            q("Recurrence Relation", "Given a₀ = 4 and aₙ = aₙ₋₁ + n, find a₃.", ["8", "9", "10", "11"], 2, ["a₁ = 5.", "a₂ = 7.", "a₃ = 10."]),
            q("Recurrence Relation", "Given a₀ = 1 and aₙ = 2aₙ₋₁ + 1, find a₃.", ["11", "13", "15", "17"], 2, ["a₁ = 3.", "a₂ = 7.", "a₃ = 15."]),
            q("Recurrence Relation", "Given a₁ = 5 and aₙ = aₙ₋₁ − 1, find a₅.", ["0", "1", "2", "3"], 1, ["a₂ = 4, a₃ = 3, a₄ = 2.", "a₅ = 1."]),
            q("Recurrence Relation", "Given a₀ = 2 and aₙ = aₙ₋₁ + 2n, find a₃.", ["10", "12", "14", "16"], 2, ["a₁ = 4.", "a₂ = 8.", "a₃ = 14."])
        ]
    },

    recModerate: {
        title: "Recurrence Relations — Moderate",
        description: "Work with recurrence expansion, patterns and derived formulas.",
        questions: [
            q("Recurrence Relation", "Given T(n) = T(n−1) + n and T(1)=1, what is T(5)?", ["10", "12", "15", "20"], 2, ["T(1)=1.", "T(5)=1+2+3+4+5 = 15."]),
            q("Recurrence Relation", "Given a₁=1, a₂=1 and aₙ=aₙ₋₁+aₙ₋₂, what is a₆?", ["5", "8", "13", "21"], 1, ["The sequence is 1, 1, 2, 3, 5, 8.", "Therefore a₆ = 8."]),
            q("Recurrence Expansion", "If T(n)=T(n−1)+2 and T(1)=3, what is T(n)?", ["2n+1", "2n+3", "n+2", "3n+2"], 0, ["T(n)=3+2(n−1).", "Simplify to T(n)=2n+1."]),
            q("Recurrence Relation", "Given T(n)=T(n−1)+2n and T(1)=1, find T(4).", ["15", "19", "21", "25"], 1, ["T(2)=5.", "T(3)=11.", "T(4)=19."]),
            q("Fibonacci Sequence", "Given a₁=2, a₂=3 and aₙ=aₙ₋₁+aₙ₋₂, find a₅.", ["8", "11", "13", "16"], 2, ["a₃=5.", "a₄=8.", "a₅=13."]),
            q("Recurrence Expansion", "Given T(n)=2T(n/2)+n and T(1)=1, find T(4).", ["8", "10", "12", "16"], 2, ["T(2)=2T(1)+2=4.", "T(4)=2T(2)+4=12."]),
            q("Closed Form", "Given a₀=1 and aₙ=2aₙ₋₁+3, which is the closed form?", ["4×2ⁿ−3", "2ⁿ+3", "4n−3", "2n+1"], 0, ["Add 3 to each term to form bₙ=aₙ+3.", "Then bₙ=2bₙ₋₁ and b₀=4.", "Thus aₙ=4×2ⁿ−3."]),
            q("Recurrence Relation", "Given T(n)=T(n−1)+n² and T(1)=1, find T(4).", ["20", "25", "30", "35"], 2, ["T(4)=1²+2²+3²+4².", "1+4+9+16=30."]),
            q("Recurrence Relation", "Given a₁=1, a₂=2 and aₙ=2aₙ₋₁−aₙ₋₂, find a₅.", ["4", "5", "6", "7"], 1, ["The sequence increases by 1 each time.", "The terms are 1, 2, 3, 4, 5.", "a₅=5."]),
            q("Algorithmic Recurrence", "Given T(n)=3T(n/3)+n and T(1)=1, find T(9).", ["18", "24", "27", "30"], 2, ["T(3)=3×1+3=6.", "T(9)=3×6+9=27."])
        ]
    },

    recHard: {
        title: "Recurrence Relations — Difficult",
        description: "Analyse recursive processes and algorithmic recurrence relations.",
        questions: [
            q("Algorithmic Recurrence", "Consider T(n)=2T(n/2)+n. What is its asymptotic complexity?", ["O(log n)", "O(n)", "O(n log n)", "O(n²)"], 2, ["Each recursion level performs O(n) work.", "There are O(log n) levels.", "Total complexity is O(n log n)."]),
            q("Recurrence Analysis", "Consider T(n)=T(n−1)+n with T(1)=1. What is the exact closed form?", ["n²", "n(n+1)/2", "n(n−1)/2", "2n"], 1, ["Expand to 1+2+...+n.", "The sum is n(n+1)/2."]),
            q("Divide and Conquer", "A recurrence is T(n)=4T(n/2)+n. What is its asymptotic complexity?", ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], 2, ["Here a=4 and b=2.", "n^(log₂4)=n² dominates the additional n work.", "Complexity is O(n²)."]),
            q("Master Theorem", "What is the asymptotic complexity of T(n)=3T(n/2)+n?", ["O(n)", "O(n log n)", "O(n^(log₂3))", "O(n²)"], 2, ["Compare n with n^(log₂3).", "The recursive term dominates.", "Complexity is O(n^(log₂3))."]),
            q("Recurrence Analysis", "Given T(n)=T(n−1)+1 and T(0)=0, what is the complexity?", ["O(1)", "O(log n)", "O(n)", "O(n²)"], 2, ["Each step adds constant work.", "There are n steps.", "Complexity is O(n)."]),
            q("Master Theorem", "What is the complexity of T(n)=2T(n/2)+n log n?", ["O(n)", "O(n log n)", "O(n log² n)", "O(n²)"], 2, ["The work per level grows logarithmically.", "There are logarithmically many levels.", "Total complexity is O(n log² n)."]),
            q("Master Theorem", "What is the complexity of T(n)=4T(n/2)+n²?", ["O(n²)", "O(n² log n)", "O(n³)", "O(n log n)"], 1, ["Here n^(log₂4)=n².", "The additional work is also n².", "Master theorem gives O(n² log n)."]),
            q("Recurrence Analysis", "What is the complexity of T(n)=T(n/2)+1?", ["O(1)", "O(log n)", "O(n)", "O(n log n)"], 1, ["The input size halves each time.", "There are O(log n) levels.", "Each level adds constant work."]),
            q("Recurrence Analysis", "What is the complexity of T(n)=2T(n/2)+1?", ["O(log n)", "O(n)", "O(n log n)", "O(n²)"], 1, ["The recursion tree has about n leaves.", "The total work is linear.", "Complexity is O(n)."]),
            q("Master Theorem", "What is the complexity of T(n)=8T(n/2)+n²?", ["O(n²)", "O(n² log n)", "O(n³)", "O(2ⁿ)"], 2, ["Here n^(log₂8)=n³.", "The additional n² work is smaller.", "Complexity is O(n³)."])
        ]
    }
};

let currentChallenge = null;
let submitted = [];
let selected = [];
let results = [];
let currentScore = 0;
let currentXP = 0;

function showSection(id, button) {
    document.querySelectorAll(".section").forEach(section => section.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.querySelectorAll(".navlinks button").forEach(btn => btn.classList.remove("active"));
    if (button) button.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function startChallenge(id) {
    currentChallenge = challenges[id];
    submitted = Array(currentChallenge.questions.length).fill(false);
    selected = Array(currentChallenge.questions.length).fill(null);
    results = Array(currentChallenge.questions.length).fill(false);
    currentScore = 0;
    currentXP = 0;

    document.getElementById("challengeArea").classList.add("show");
    document.getElementById("challengeTitle").innerHTML =
        `<h2>${currentChallenge.title}</h2><p>${currentChallenge.description}</p>`;
    document.getElementById("analysis").classList.remove("show");
    document.getElementById("analysis").innerHTML = "";
    document.getElementById("analysisBtn").disabled = true;
    document.getElementById("score").textContent = "0";
    document.getElementById("submitted").textContent = `0/${currentChallenge.questions.length}`;
    document.getElementById("xp").textContent = "0";
    document.getElementById("progress").style.width = "0%";

    renderQuestions();
    document.getElementById("challengeArea").scrollIntoView({ behavior: "smooth" });
}

function renderQuestions() {
    const container = document.getElementById("questionsContainer");
    container.innerHTML = "";

    currentChallenge.questions.forEach((question, index) => {
        const card = document.createElement("div");
        card.className = "questionCard";

        const level = currentChallenge.title.split("—")[1].trim().toLowerCase();

        card.innerHTML = `
            <div class="questionTop">
                <span class="questionNumber">Question ${index + 1} of ${currentChallenge.questions.length}</span>
                <span class="difficulty ${level}">${level.charAt(0).toUpperCase() + level.slice(1)}</span>
            </div>
            <div class="topic">${question.topic}</div>
            <div class="questionText">${question.question}</div>
            <div class="options">
                ${question.options.map((option, i) => `
                    <label class="option" id="option-${index}-${i}" onclick="selectOption(${index},${i})">
                        <input type="radio" name="question-${index}">
                        ${String.fromCharCode(65 + i)}. ${option}
                    </label>
                `).join("")}
            </div>
            <button class="submitQuestion" id="submit-${index}" onclick="submitQuestion(${index})">Submit Answer</button>
            <div class="answerBox" id="answer-${index}"></div>
        `;
        container.appendChild(card);
    });
}

function selectOption(questionIndex, optionIndex) {
    if (submitted[questionIndex]) return;

    selected[questionIndex] = optionIndex;

    currentChallenge.questions[questionIndex].options.forEach((_, i) => {
        document.getElementById(`option-${questionIndex}-${i}`).classList.remove("selected");
    });

    document.getElementById(`option-${questionIndex}-${optionIndex}`).classList.add("selected");
}

function submitQuestion(index) {
    if (submitted[index]) return;

    if (selected[index] === null) {
        alert("Please select an answer before submitting.");
        return;
    }

    const question = currentChallenge.questions[index];
    submitted[index] = true;
    const isCorrect = selected[index] === question.answer;
    results[index] = isCorrect;

    if (isCorrect) {
        currentScore++;
        currentXP += 100;
    }

    document.getElementById(`option-${index}-${question.answer}`).style.borderColor = "var(--green)";

    if (!isCorrect) {
        document.getElementById(`option-${index}-${selected[index]}`).style.borderColor = "var(--red)";
    }

    const answerBox = document.getElementById(`answer-${index}`);
    const correctLetter = String.fromCharCode(65 + question.answer);

    answerBox.innerHTML = `
        <div class="answerTitle ${isCorrect ? "correct" : "incorrect"}">
            ${isCorrect ? "✓ Correct Answer!" : "✗ Incorrect Answer"}
        </div>
        <p style="color:var(--muted);font-size:16px">
            <strong>Correct Answer:</strong>
            ${correctLetter}. ${question.options[question.answer]}
        </p>
        <div class="solution">
            <h4>Step-by-Step Solution</h4>
            <ol>${question.solution.map(step => `<li>${step}</li>`).join("")}</ol>
        </div>
    `;

    answerBox.classList.add("show");
    document.getElementById(`submit-${index}`).disabled = true;
    document.getElementById(`submit-${index}`).textContent = "Answer Submitted ✓";

    updateStats();

    if (submitted.every(Boolean)) {
        document.getElementById("analysisBtn").disabled = false;
    }
}

function updateStats() {
    const totalSubmitted = submitted.filter(Boolean).length;

    document.getElementById("score").textContent = currentScore;
    document.getElementById("submitted").textContent =
        `${totalSubmitted}/${currentChallenge.questions.length}`;
    document.getElementById("xp").textContent = currentXP;

    document.getElementById("progress").style.width =
        `${totalSubmitted / currentChallenge.questions.length * 100}%`;

    updateAchievements();
}

function updateAchievements() {
    const submittedCount = submitted.filter(Boolean).length;
    const correctCount = results.filter(Boolean).length;

    if (submittedCount >= 1) {
        document.getElementById("badgeFirst").classList.add("unlocked");
    }

    if (correctCount >= 5) {
        document.getElementById("badgeFive").classList.add("unlocked");
    }

    if (submittedCount === currentChallenge.questions.length) {
        document.getElementById("badgeAll").classList.add("unlocked");

        const percentage = correctCount / currentChallenge.questions.length * 100;

        if (percentage >= 80) {
            document.getElementById("badge80").classList.add("unlocked");
        }

        if (percentage === 100) {
            document.getElementById("badgePerfect").classList.add("unlocked");
        }
    }
}

function showAnalysis() {
    if (!submitted.every(Boolean)) {
        alert("Please submit every question first.");
        return;
    }

    const questions = currentChallenge.questions;
    const total = questions.length;
    const correct = results.filter(Boolean).length;
    const percentage = correct / total * 100;

    let message;

    if (percentage === 100) {
        message = "Outstanding! You solved every question correctly and demonstrated complete command of this challenge.";
    } else if (percentage >= 80) {
        message = "Excellent performance. Your understanding is strong, with only a few areas requiring refinement.";
    } else if (percentage >= 60) {
        message = "Good performance. Your foundation is developing well, but additional practice will improve consistency.";
    } else if (percentage >= 40) {
        message = "You have a developing understanding. Review the theory and practise the concepts that caused errors.";
    } else {
        message = "Start by revisiting the Learn section and practising the basic examples before attempting difficult problems.";
    }

    const review = questions.map((question, i) => `
        <div class="recommendation">
            <b>Question ${i + 1}</b> — ${results[i] ? "✓ Correct" : "✗ Incorrect"}
            <br>
            <span style="font-size:14px">Correct answer: ${question.options[question.answer]}</span>
        </div>
    `).join("");

    const analysis = document.getElementById("analysis");

    analysis.innerHTML = `
        <div class="analysisHero">
            <h2>Detailed Challenge Analysis</h2>
            <div class="bigScore">${percentage.toFixed(1)}%</div>
            <p style="color:var(--muted)">${correct} correct out of ${total}</p>
            <div class="recommendation">${message}</div>
        </div>

        <div class="analysisGrid">
            <div class="analysisCard">
                <h3>Score</h3>
                <div class="metric">${correct}/${total}</div>
                <p>Accuracy: ${percentage.toFixed(1)}%</p>
            </div>
            <div class="analysisCard">
                <h3>XP Earned</h3>
                <div class="metric">${currentXP}</div>
                <p>XP earned from this challenge.</p>
            </div>
            <div class="analysisCard">
                <h3>Questions</h3>
                <div class="metric">${total}</div>
                <p>All questions submitted.</p>
            </div>
        </div>

        <div class="analysisCard">
            <h2>Question Review</h2>
            ${review}
        </div>

        <div class="analysisCard" style="margin-top:20px">
            <h2>Improvement Analysis</h2>
            ${percentage >= 80
                ? `<div class="recommendation">You have performed strongly. Try moving to the next difficulty level and focus on multi-concept problems.</div>`
                : `<div class="recommendation">Revisit the formulas and worked examples in the Learn section.</div>
                   <div class="recommendation">For incorrect questions, identify the structure of the problem before selecting a formula.</div>
                   <div class="recommendation">Attempt the challenge again after revision to check whether your accuracy improves.</div>`
            }
        </div>

        <div class="analysisCard" style="margin-top:20px">
            <h2>Next Challenge</h2>
            <div class="recommendation">${getNextRecommendation()}</div>
        </div>
    `;

    analysis.classList.add("show");
    analysis.scrollIntoView({ behavior: "smooth" });
}

function getNextRecommendation() {
    const title = currentChallenge.title;

    if (title.includes("Easy")) {
        return "You completed an Easy challenge. Try the Moderate level of the same topic.";
    }

    if (title.includes("Moderate")) {
        return "You completed a Moderate challenge. Try the Difficult level of the same topic.";
    }

    return "You completed a Difficult challenge. Try a different topic and compare your performance.";
}
