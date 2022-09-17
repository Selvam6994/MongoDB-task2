//Number of students absent
[
    {
      '$match': {
        'attendance_details': {
          '$elemMatch': {
            'attendance': 'absent'
          }
        }
      }
    }, {
      '$count': 'total'
    }
  ]

  //Code kata completed by the user
  [
    {
      '$match': {
        'name': 'Raju'
      }
    }, {
      '$project': {
        'codekata_completed': 1
      }
    }
  ]

  //Topics and Tasks in month of October
  [
    {
      '$match': {
        'month': 'october'
      }
    }, {
      '$project': {
        'content': {
          'topics': 1, 
          'tasks': 1
        }
      }
    }
  ]

  //company drives which appeared between 15 oct-2020 and 31-oct-2020
  [
    {
      '$match': {
        'month': 'October', 
        'date': {
          '$gte': 15, 
          '$lte': 31
        }
      }
    }, {
      '$project': {
        'companies': 1
      }
    }
  ]

//mentors with who has the mentee's count more than 15
  [
    {
      '$match': {
        'mentees_assigned': {
          '$gte': 15
        }
      }
    }
  ]

// students who are appeared for the placement.
  [
    {
      '$match': {
        'placements': 'appeared'
      }
    }, {
      '$count': 'total'
    }
  ]