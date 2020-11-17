/ Set up MySQL connection
let mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "a88k7jtrchwihht7",
        password: "zqom3ey5h7mg76dg",
        database: "mga105oada0zzcb3"
    });
}
// Make MySQL connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected: " + connection.threadId);
});
// Export MySQL connection
module.exports = connection;