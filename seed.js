var db=require('./models/index.js');

function seedHockeyGames(req, res) {

  var tickets = [
    {
    game_title: 'Minnesota Wild vs Chicago Blackhawks',
    date: '1/4/18',
    start_time: '7:30 PM CST',
    stadium_name: 'Xcel Energy Center',
    stadium_location: '199 W Kellogg Blvd, St Paul, MN 55102',
    section: 201,
    row: 13,
    seat: 4,
 },
 { game_title: 'San Jose Sharks vs Los Angeles Kings',
 date: '1/4/18',
 start_time: '7:30 PM PST',
 stadium_name: 'Staples Center'
 stadium_location: '1111 S Figueroa St, Los Angeles, CA 90015'
 section: 101
 row: 3
 seat: 9 },
 { game_title: 'Buffalo Sabres vs Anaheim Ducks'
 date: '1/4/18'
 start_time: '7:30 PM CST'
 stadium_name: 'Xcel Energy Center'
 stadium_location: '199 W Kellogg Blvd, St Paul, MN 55102'
 section: 220
 row: 8
 seat: 5 },
 { game_title: 'London Knights vs Calgary Hitmen'
 date: '1/5/18'
 start_time: '7:00 PM EDT'
 stadium_name: 'Budweiser Gardens'
 stadium_location: '99 Dundas Street, London, Ontario, Canada N6A 6K1'
 section: 223
 row: 11
 seat: 4 },
 { game_title: 'Kitchener Rangers vs Portland Winterhawks'
 date: '1/5/18'
 start_time: '7:00 PM EDT'
 stadium_name: 'Moda Center'
 stadium_location: '1 N Center Ct St, Portland, OR 97227'
 section: 108
 row: 5
 seat: 9 },
 { game_title: 'Sault Ste. Marie Greyhounds vs Niagara IceDogs'
 date: '1/6/18'
 start_time: '7:00 PM CST'
 stadium_name: 'Essar Center'
 stadium_location: '269 Queen St E, Sault Ste. Marie, ON P6A 1Y9, Canada'
 section: 210
 row: 13
 seat: 4 },
 { game_title: 'San Jose Barracuda vs San Diego Gulls'
 date: '1/6/18'
 start_time: '1:30 PM PST'
 stadium_name: 'SAP Center'
 stadium_location: '525 W Santa Clara St, San Jose, CA 95113'
 section: 225
 row: 8
 seat: 1 },
  ];

  for (ticket of tickets) {
    var newTicket = new Ticket(ticket);
    newTicket.save();
  }

  res.send('Database seeded!');
}
