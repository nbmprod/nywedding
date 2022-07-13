const guests = [
    {name: 'Maksim', surname: 'Bychkov', category: 'family',         city: 'Tyumen',          },
    {name: 'Tatyana', surname: 'Bychkova', category: 'family',       city: 'Tyumen',          },
    {name: 'Ekaterina', surname: 'Bychkova', category: 'family',     city: 'Tyumen',          },
    {name: 'Anastasiya', surname: 'Bychkova', category: 'family',    city: 'Moscow',          },
    {name: 'Oleg', surname: 'Bychkov', category: 'family',           city: 'Moscow',          },
    {name: 'Natasha', surname: 'Bychkova', category: 'family',       city: 'Moscow',          },
    {name: 'Anastasiya', surname: 'Gryaznova', category: 'friends',  city: 'Saint-Peterburg', },
    {name: 'Evgeniy', surname: 'Yevstegneyev', category: 'friends',  city: 'Saint-Peterburg', },
    {name: 'Tatyana', surname: 'Karasyova',  category: 'friends',    city: 'Saint-Peterburg', },
    {name: 'Polina', surname: 'Tebenkova', category: 'friends',      city: 'Moscow',          },
    {name: 'Olga', surname: 'Yakusheva', category: 'friends',        city: 'Moscow',          },
    {name: 'Rostislav', surname: 'Shishkov', category: 'friends',    city: 'Moscow',          },
    {name: 'Anton', surname: 'Osokin', category: 'friends',          city: 'Nefteyugansk',    },
    {name: 'Nikita', surname: 'Anpilogov', category: 'friends',      city: 'Saint-Peterburg', },
    {name: 'Tatyana', surname: 'Shevtsova', category: 'friends',     city: 'Saint-Peterburg', },
    {name: 'Maksim', surname: 'Aleksandrov', category: 'friends',    city: 'Saint-Peterburg', },
    {name: 'Arina', surname: 'Kirichenko', category: 'friends',      city: 'Moscow',          },
    {name: 'Artyom', surname: 'Mironenko', category: 'friends',      city: 'Moscow',          },
    {name: 'Dmitriy', surname: 'Shabalin', category: 'friends',      city: 'Budapest',        },
    {name: 'Maria', surname: 'Tereshchenko',  category: 'friends',   city: 'Nefteyugansk',        },
    {name: 'Yana', surname: 'Bychkova', category: 'family',          city: 'Moscow',          },
    ];
const headers =['city', 'name', 'surname', 'category']


function sortedByName(guests) {
    guests.sort(function(a, b){
        if (a.name > b.name){
            return 1;
        }
        else if (b.name > a.name){
            return -1;
        }
        else return 0
        });
    };
function sortedBySurname(guests) {
    guests.sort(function(a, b){
        if (a.surname > b.surname){
            return 1;
        }
        else if (b.surname > a.surname){
            return -1;
        }
        else return 0
        });
    };
function sortedByCity(guests) {
    guests.sort(function(a, b){
        if (a.city > b.city){
            return 1;
        }
        else if (b.city > a.city){
            return -1;
        }
        else return 0
        });
    };
function sortedByCategory(guests) {
    guests.sort(function(a, b){
        if (a.category > b.category){
            return 1;
        }
        else if (b.category > a.category){
            return -1;
        }
        else return 0
        });
    };
function shuffle(guests) {
    guests.sort(() => Math.random() - 0.5);
    };

shuffle(guests)


let table = document.querySelector('#table');

//inserting headers
// let headTr = document.createElement('tr');
// for (let header of headers) {	
//     let th = document.createElement('th');
//     th.innerHTML = header;
//     headTr.appendChild(th)
    
//     table.prepend(headTr); 

// }


//inserting guests in guest list
for (let guest of guests) {
	let tr = document.createElement('tr');
  
  for (let key in guest) {
		let td = document.createElement('td');
		td.innerHTML = guest[key];
		tr.appendChild(td);
  }

  table.appendChild(tr);

}







// //inserting styles for first and last columns
//     let colgroup = document.createElement('colgroup');

//     let firstCol = document.createElement('col');
//     firstCol.className = 'firstCol';
//     colgroup.appendChild(firstCol);

//     let secondCol = document.createElement('col');
//     secondCol.className = 'secondCol';
//     colgroup.appendChild(secondCol);

//     let thirdCol = document.createElement('col');
//     thirdCol.className = 'thirdCol';
//     colgroup.appendChild(thirdCol);

//     let fourthCol = document.createElement('col');
//     fourthCol.className = 'fourthCol';
//     colgroup.appendChild(fourthCol);

//     table.prepend(colgroup)






