export const logger = (req, _, next) => {
    const ISODate = new Date(Date.now()).toISOString();
    const dateString = ISODate.split("T")[0];
    const timeString = ISODate.split("T")[1].split(".")[0];
    
    req.time = `${dateString} — ${timeString}`;
    console.log(`${req.method} '${req.path}' | HTTP ${req.httpVersion} | ${req.hostname} | ${req.time}`);
    next();
};