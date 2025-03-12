const express = require('express');
const paymentController = require('../middleware/payment-controller.js');
const router = express.Router();

// CRUD operations for payments
router.post('/', paymentController.createPayment);
router.get('/:id', paymentController.getPayment);
router.get('/', paymentController.getPayments);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;