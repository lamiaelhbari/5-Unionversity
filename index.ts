/*This program must be able to search courses and study groups from a list, 
enroll in them, and print a list of currently enrolled events*/ 

import courses from './courses';
import studyGroups from './studyGroups';

// Course type :
type Course = {
   id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

// StudyGroup type :
type StudyGroup =  {
   id: number;
  courseId: number;
   title: string;
  keywords: string[];
  eventType: string;
};

// SearchEventsOptions type : 
type SearchEventsOptions = {
   query: string | number;
  eventType: 'courses' | 'groups' ;
};

//  Searching Through Events : 
function searchEvents(options:SearchEventsOptions){
let events : ( Course | StudyGroup) [];
if(options.eventType === 'courses') {
 events = courses;
}else {
 events = studyGroups;
}
// filter events :
  return events.filter((event) => {
   if (typeof options.query === 'number'){
   return options.query = event.id ;
     }
      if (typeof options.query === 'string'){
     return event.keywords.includes(options.query);
      }
  });
};

// call the searchEvents() :
//  Les bonnes valeurs pour la querypropriété de l'argument incluent 'art'et '2':
const searchResults = searchEvents({ query: 2, eventType: 'courses' });
console.log(searchResults);

// Enrolling in Events :
let enrolledEvents: ( Course | StudyGroup)[] = [];
//  function enroll (event: Course | StudyGroup){
//   enrolledEvents = [...enrolledEvents, event];
//  } 

// Allow the enroll() function to take in a list of courses and add them all to enrolledEvents : 
function enroll (events: Course | StudyGroup){
  enrolledEvents = [...enrolledEvents, events];
 }

enroll(searchResults[1]);
console.log(enrolledEvents);


// Function that allows dropping a course : 
function dropCourse(eventId: number) {
  enrolledEvents = enrolledEvents.filter(event => {
    if ('id' in event) {
      return event.id !== eventId;
    }
    return true; // For study groups, we keep all events 
  });
}
dropCourse(1);

// Function that prints only the titles of enrolled events.
function printEnrolledEventTitles() {
  enrolledEvents.forEach(event => {
    console.log(event.title);
  });
}
printEnrolledEventTitles();











