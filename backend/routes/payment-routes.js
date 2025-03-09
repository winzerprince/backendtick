const express = require('express');
const paymentController = require('../middleware/payment-controller.js');
const router = express.Router();

router.post('/', paymentController.createPayment);
router.get('/:id', paymentController.getPayment);
router.get('/', paymentController.getPayments);
router.update('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);

module.exports = router;