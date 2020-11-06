

function mergeRanges(meetings) {
  //define variables
  let copiedMeetings = meetings.slice(0);
  let sortedMeetings = copiedMeetings.sort((a, b) => (a.startTime > b.startTime) ? 1 : -1)
  let finalRanges = [sortedMeetings[0]];

  for (let i = 1; i <= sortedMeetings.length - 1; i++) {
    
    // current meeting is current object on sorted meetings array 
    let currentMeeting = sortedMeetings[i];
    // last meeting set refers to last object aka meeting on the final array 
    let lastMeetingSet = finalRanges[finalRanges.length - 1]; // looks at last item in final ranges array 

    if ( currentMeeting && (currentMeeting.startTime <= lastMeetingSet.endTime)) {
      // check end times and merge with existing meeting object
      lastMeetingSet.endTime = Math.max(currentMeeting.endTime, lastMeetingSet.endTime);
    } else {
      // otherwise push the currentMeeting onto finalRanges
      finalRanges.push(currentMeeting);
    }
  }
  
  return finalRanges; 
}


/* --------------------------------------------------- Tests ------------------------------------------------*/

// let desc = 'meetings overlap';
// let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
// let expected = [{ startTime: 1, endTime: 4 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings touch';
// actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
// expected = [{ startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meeting contains other meeting';
// actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings stay separate';
// actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
// expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'multiple merged meetings';
// actual = mergeRanges([
//   { startTime: 1, endTime: 4 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 5, endTime: 8 },
// ]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'meetings not sorted';
// actual = mergeRanges([
//   { startTime: 5, endTime: 8 },
//   { startTime: 1, endTime: 4 },
//   { startTime: 6, endTime: 8 },
// ]);
// expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = 'oneLongMeetingContainsSmallerMeetings';
// actual = mergeRanges([
//   { startTime: 1, endTime: 10 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 6, endTime: 8 },
//   { startTime: 9, endTime: 10 },
//   { startTime: 10, endTime: 12 }
// ]);
// expected = [
//   { startTime: 1, endTime: 12 }
// ];
// assertArrayEquals(actual, expected, desc);

// desc = 'sample input';
// actual = mergeRanges([
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]);
// expected = [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ];
// // assertArrayEquals(actual, expected, desc);

// function assertArrayEquals(a, b, desc) {
//   // Sort the keys in each meeting to avoid
//   // failing based on differences in key order.
//   orderedA = a.map( function(meeting) {
//     return JSON.stringify(meeting, Object.keys(meeting).sort());
//   });
//   orderedB = b.map( function(meeting) {
//     return JSON.stringify(meeting, Object.keys(meeting).sort());
//   });
//   const arrayA = JSON.stringify(orderedA);
//   const arrayB = JSON.stringify(orderedB);
//   if (arrayA !== arrayB) {
//     console.log(`${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`)
//   } else {
//     console.log(`${desc} ... PASS`);
//   }
// }