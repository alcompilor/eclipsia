import crypto from 'crypto';

class Transaction {
    constructor(sender, reciever, payload) {
        this.timestamp = Date.now();
        this.sender = sender;
        this.reciever = reciever;
        this.payload = typeof payload !== "string" 
            ? JSON.stringify(payload) 
            : payload;
        this.hash = this.calcHash();
    }

    calcHash = () => {
        const hash = crypto
            .createHash('sha256')
            .update(this.sender + this.reciever + this.timestamp + this.payload)
            .digest("hex");
        return hash;
    }
}

export default Transaction;