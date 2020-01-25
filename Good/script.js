var currentEventID;
var events;
var visitors;

/*
var events = [{
"ID": 1,
"Date": "05.09.2019",
"EventName": "Angular Webinar",
"Time": "12:50",
"City": "Tel Aviv",
"SeatPlaces": 100,
"FreePlaces": 100
},
{
"ID": 2,
"Date": "07.09.2019",
"EventName": "React Webinar",
"Time": "13:50",
"City": "Hulon",
"SeatPlaces": 100,
"FreePlaces": 100
},
{
"ID": 5,
"Date": "06.09.2019",
"EventName": "Vue Webinar",
"Time": "18:50",
"City": "Kfar Saba",
"SeatPlaces": 100,
"FreePlaces": 100
},
{
"ID": 6,
"Date": "09.09.2019",
"EventName": "PHP Webinar",
"Time": "14:50",
"City": "Raanana",
"SeatPlaces": 100,
"FreePlaces": 100
},
{
"ID": 7,
"Date": "08.09.2019",
"EventName": "JavaScript Webinar",
"Time": "13:50",
"City": "Rishon",
"SeatPlaces": 100,
"FreePlaces": 100
}]
/////////////////////////////////////////////////////////////////////
var visitors = [{
    "ID": 1,
    "VisitorName": "Slava Sanin",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 2,
    "VisitorName": "Alex",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 3,  
    "VisitorName": "Boris",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 4,  
    "VisitorName": "Shay",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 5,
    "VisitorName": "Izik",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 6,
    "VisitorName": "Moshe",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 7,
    "VisitorName": "Michael",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 8,
    "VisitorName": "Lavi",  
    "Places": 5,
    "EventID": 1
},
{
    "ID": 9,
    "VisitorName": "Dan",  
    "Places": 5,
    "EventID": 2
},
{
    "ID": 10,
    "VisitorName": "Anatoly",  
    "Places": 5,
    "EventID": 2
}];
*/
/////////////////////////////////////////////////////////////////////
function CountFreePlaces() {
  for (let i in events) events[i].FreePlaces = events[i].SeatPlaces - CountPlaces(events[i].ID);
}
/////////////////////////////////////////////////////////////////////
function CountPlaces(id) {
	          let visitors_count = 0;
	          for (let i in visitors) { 
              if (visitors[i].EventID == id)
              visitors_count += visitors[i].Places; 
            }	          
            return visiters_count;
        }
/////////////////////////////////////////////////////////////////////
function LoadDataFromDB() {
    $.ajax({
      method: "GET",
      dataType: "json",
      url: "https://codesandbox.io/s/nodejs-and-mysql-ver5-yc7is",
      data: data,
      //{ some_data: data, to_table: table },
      success: function (data) { 
            console.log(data);
            events[] = data.events;
            visitors[] = data.visitors;
          }
    })
      .done(function( msg ) {
      alert( "Data Inserted: " + msg );
    });
}
/////////////////////////////////////////////////////////////////////
function InsertNewDataToDB(data, table) {
    $.ajax({
      method: "POST",
      url: "https://cym7i.sse.codesandbox.io/insert",
      data: { some_data: data, to_table: table }
    })
      .done(function( msg ) {
      alert( "Data Inserted: " + msg );
    });
}
/////////////////////////////////////////////////////////////////////
function UpdateDataInDB(data, table, column, id) {
    $.ajax({
      method: "POST",
      url: "https://cym7i.sse.codesandbox.io/update",
      data: { some_data: data, to_table: table, for_column: column, for_id: id }
    })
      .done(function( msg ) {
      alert( "Data Updated: " + msg );
    });
}
/////////////////////////////////////////////////////////////////////
function DeleteDataFromDB(table, id) {
    $.ajax({
      method: "POST",
      url: "https://cym7i.sse.codesandbox.io/delete",
      data: { from_table: table, what_id: id }
    })
      .done(function( msg ) {
      alert( "Data Deleted from DB: " + msg );
    });
}
/////////////////////////////////////////////////////////////////////
function FindNextEventMaxID() {
  let counter = events.length;
  let max = 0;
  while (--counter >= 0) { 
    //console.log(events[counter].ID);
    if (events[counter].ID > max) max = events[counter].ID;
  }  
  return max+1;
}
/////////////////////////////////////////////////////////////////////
CountFreePlaces();
/////////////////////////////////////////////////////////////////////
var DemoApp = angular.module('DemoApp', ['dx']);
/////////////////////////////////////////////////////////////////////
DemoApp.controller('DemoController', function DemoController($scope) {

    function clearEvents() {
        $scope.events = [];
    }
    
    function logEvent(eventName) {
        $scope.events.unshift(eventName);
    }
    
    $scope.events = [];
  
    $scope.gridOptions = {
        dataSource: events,
        keyExpr: "ID",
        showBorders: true,
        paging: {
            enabled: true
        },
        editing: {
            mode: "cell",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        columns: [{
            dataField: "EventName",
            caption: "Event Name",
            width: 270
        }, {
            dataField: "Date",
            dataType: "date",
            width: 100
        },{
            dataField: "Time",
            dataType: "time",
            width: 70
        }, {
            dataField: "City",
            width: 170
        }, {
            dataField: "SeatPlaces",
            width: 100
        }, {
            dataField: "FreePlaces",
            width: 100, 
            allowEditing: false
            //calculateCellValue: CountFreePlaces():
        }
        ],
        masterDetail: {
            enabled: true,
            template: "detail"
          
        },
      
        onEditingStart: function(e) {
            logEvent("EditingStart");
        },
        onInitNewRow: function(e) {
            logEvent("InitNewRow");
        },
        onRowInserting: function(e) {
            logEvent("RowInserting");
            console.log(e.data); 
            let id = events.length; 
            console.log(events[id-1].ID);  
            e.data.ID = FindNextEventMaxID();          
            //events[id-1].ID = FindNextEventMaxID();
            //return true;
            
            /*let tempEventObj = {
                                  "ID": 0,
                                  "Date": "",
                                  "EventName": "",
                                  "Time": "",
                                  "City": "",
                                  "SeatPlaces": 0,
                                  "FreePlaces": 0
                               };
                       
            for (let key in e.data) {                      
                      console.log(key);                  
                      tempEventObj[key] = e.data[key];
             }               
            console.log("tempEventObj: ", tempEventObj);
            //events.push(tempEventObj); */
        },
        onRowInserted: function(e) {
            logEvent("RowInserted");
            InsertNewDataToDB(data, table);
        },
        onRowUpdating: function(e) {
            logEvent("RowUpdating");
        },
        onRowUpdated: function(e) {
            logEvent("RowUpdated");
            let id = e.data["ID"];              
            if (e.data.SeatPlaces < CountPlaces(id)) {
              e.data.SeatPlaces = CountPlaces(id);              
              console.log(e.data);
              console.log("SeatPlaces: ", e.data.SeatPlaces);
              console.log("Visitors: ", visitors[id]);
              console.log("Places: ", CountPlaces(id));              
            }
            CountFreePlaces();
            UpdateDataInDB(data, table, column, id);
        },
        onRowRemoving: function(e) {
            logEvent("RowRemoving"); 
            if (e.data.SeatPlaces != e.data.FreePlaces) return true;          
        },
        onRowRemoved: function(e) {
            logEvent("RowRemoved");
            DeleteDataFromDB(table, id);
        }        
    };
  /////////////////////////////////////////////////////////////////////
    $scope.getDetailGridSettings = function (key) {     
        return {          
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.ArrayStore({
                    key: "ID",
                    data: visitors
                }),
                filter: ["EventID", "=", key]
            }),
            columnAutoWidth: true,
            showBorders: true,
            paging: {
                enabled: false
            },
            editing: {
                mode: "cell",
                allowUpdating: true,
                allowDeleting: true,
                allowAdding: true
            },
            columns: [{
                    dataField: 'VisitorName',
                    //dataType: 'date'
            }, {
                    dataField: 'Places',
                    //dataType: 'date'
                }//, {
                    //caption: 'Status',
                    //dataType: 'boolean',
                    //calculateCellValue: function (
                    //  ) {
                    //    return rowData.Status == "has come";
                    //}
                //}
                     ],
          
        onEditingStart: function(e) {
            logEvent("EditingStart");
        },
        onInitNewRow: function(e) {
            logEvent("InitNewRow");
        },
        onRowInserting: function(e) {
            logEvent("RowInserting");
            console.log(e.data); 
            let id = visitors.length; 
            console.log(visitors[id-1].ID);
            //console.log(e.data.EventName);
            console.log($scope.gridOptions);
            //e.data.EventID = FindNextEventMaxID();    
        },
        onRowInserted: function(e) {
            logEvent("RowInserted");
            console.log(e.data);  
            //e.data.EventID = "";
            InsertNewDataToDB(data, table);
        },
        onRowUpdating: function(e) {
            logEvent("RowUpdating");
            //if (e.data["Places"] > 0 ) {}
        },
        onRowUpdated: function(e) {
            logEvent("RowUpdated");                     
            console.log("Reserved places: ", e.data["Places"]); 
            let id = e.data["EventID"];
            console.log("EventID: ", id);   
            //console.log($scope.gridOptions.dataSource[id].FreePlaces -= e.data["Places"]); 
            CountFreePlaces();
            if (events[id-1].FreePlaces < 0) {
                  e.data["Places"] += events[id-1].FreePlaces;
                  events[id-1].FreePlaces = 0;                  
                } 
          
            //if (e.data.SeatPlaces != e.data.FreePlaces) $("tr[aria-rowindex='1'] a.dx-link-delete").unbind('click');
          console.log(e.data);
          console.log($scope.gridOptions.dataSource[id-1]);
          
          UpdateDataInDB(data, table, column, id);
        },
        onRowRemoving: function(e) {
            logEvent("RowRemoving");
          
        },
        onRowRemoved: function(e) {
            logEvent("RowRemoved");
            DeleteDataFromDB(table, id);
        }
          
        };
    }
});

