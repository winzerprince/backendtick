const Payment = require('../models/Payment.js');

const createPayment = async (req, res) => {
    try {
        const { amount, paymentData, paymentStatus, userID } = req.body;
        const payment = await Payment.create({ amount, paymentData, paymentStatus, userID });
        res.status(201).json(payment);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to create payment' });
    }

}

const getPayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payments.getByPk(id);
        if (!payment) return res.status(404).json({ message: 'Payment not found in database' });
        res.status(200).json(payment);

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get payment' });

    }
}

const getPayments = async (req, res) => {
    try {
        const payments = await Payment.findAll();
        res.status(200).json(payments);
    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to get payments' });

    }
}

const updatePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, paymentData, paymentStatus, userID } = req.body;
        let payment = await Payment.findByPk(id);
        if (!payment) return res.status(404).json({ message: 'Payment not found in database' });
        await payment.update({ amount, paymentData, paymentStatus, userID }, { where: { paymentID: id } });
        payment = await Payment.findByPk(id);
        res.status(200).json(payment);

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to update payment' });

    }
}

const deletePayment = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await Payment.findByPk(id);
        if (!payment) return res.status(404).json({ message: 'Payment not found in database' });
        await payment.destroy();
        res.status(200).json({ message: 'Payment deleted' });

    }
    catch (err) {
        console.error('Error: ', err);
        res.status(500).json({ message: 'Failed to delete payment' });

    }
}

module.exports = {
    createPayment,
    getPayment,
    getPayments,
    updatePayment,
    deletePayment,
}