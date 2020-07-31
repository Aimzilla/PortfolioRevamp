var createPolitician = function(name, partyColor)
//this is the factory function - wraps around original object & properties & function
{
  var politician = {};  // new empty object

    politician.name = name;  // set name property to value of name param
    politician.totalVotes = 0;
    politician.electionResults = null;
    politician.partyColor = partyColor;

  politician.calculateAllTheVotes = function()
  {
    this.totalVotes = 0;

    for (var i=0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i];
      }
  };
    return politician;  //this returns all of the properties associated to the politician object
};

/*This creates the politician by pulling in the properties you want in the form of parameters*/
var bruce = createPolitician("Bruce Banner", [132, 17, 11]);
var tony = createPolitician("Tony Stark", [245, 141, 136]);

/*The election results for each state for each candidate*/
bruce.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

tony.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

/*Update the results - probably a hanging chad issue*/
   bruce.electionResults[9] = 1;
   tony.electionResults[9] = 28;

   bruce.electionResults[4] = 17;
   tony.electionResults[4] = 38;

   bruce.electionResults[43] = 11;
   tony.electionResults[43] = 27;

/*Determine the results/winner for each state*/
var setStateResults = function(state)
{
  theStates[state].winner = null;

  if (bruce.electionResults[state] > tony.electionResults[state])
  {
    theStates[state].winner = bruce;
  }
  else if (bruce.electionResults[state] < tony.electionResults[state])
  {
      theStates[state].winner = tony;
  }

/*Set the color for the winner for each state*/
var stateWinner = theStates[state].winner;

  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else theStates[state].rgbColor = [11,32,57];

/*This section populates the bottom table:*/
  var stateResultsTable = document.getElementById('stateResults');
  var header = stateResultsTable.children[0];
  var stateName = header.children[0].children[0];
  var stateAbbreviation = header.children[0].children[1];
//table.body.row.td/td
//table.children[1].children[0].children[0];
  var body = stateResultsTable.children[1];
  var candidate1 = body.children[0].children[0];
  var results1 = body.children[0].children[1];
  var candidate2 = body.children[1].children[0];
  var results2 = body.children[1].children[1];
  var stateWinner = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbreviation.innerText = theStates[state].nameAbbrev;
  candidate1.innerText = bruce.name;
  results1.innerText = bruce.electionResults[state];
  candidate2.innerText = tony.name;
  results2.innerText = tony.electionResults[state];

  if (bruce.electionResults[state] > tony.electionResults[state])
    {
      stateWinner.innerText = bruce.name;
    }
  else if (bruce.electionResults[state] < tony.electionResults[state])
    {
      stateWinner.innerText = tony.name;
    }
  else
   {
     stateWinner.innerText = "Tie";
   }
};

bruce.calculateAllTheVotes();
tony.calculateAllTheVotes();


/*Declare the winner*/
var winner = "";

if (bruce.totalVotes > tony.totalVotes)
  {
    winner = bruce.name;
  }
else if (bruce.totalVotes < tony.totalVotes)
  {
    winner = tony.name;
  }
else
  {
    winner = "Draw.";
  }

console.log("And the winner is: " + winner + "!!!");

/*This section populates the table at top of map:*/
var countryResultsTable = document.getElementById('countryResults');
var row = countryResultsTable.children[0].children[0];
//table.body.row.td/th
row.children[0].innerText = bruce.name;
row.children[1].innerText = bruce.totalVotes;
row.children[2].innerText = tony.name;
row.children[3].innerText = tony.totalVotes;
row.children[5].innerText = winner;

/*This is how I originally wrote it out...works, but much longer.  Above consolidates from table level down to row level*/
//var table = countryResultsTable;
//table.children[0].children[0].children[0].innerText = bruce.name;
//table.children[0].children[0].children[1].innerText = bruce.totalVotes;
//table.children[0].children[0].children[2].innerText = tony.name;
//table.children[0].children[0].children[3].innerText = tony.totalVotes;
//table.children[0].children[0].children[5].innerText = winner;
