import OfficeModel from '../models/officeModel';

const Office = {
  createOffice(req, res) {
    if (!req.body.officeName || !req.body.officeType  || !req.body) {
      return res.status(400).send({ error: 'Office name and type fields are required' });
    }
    const office = OfficeModel.create(req.body);
    return res.status(201).send({
      "status": 201,
      "data": office
    });
  },
  getAllOffice(req, res) {
    const offices = OfficeModel.findAll();
    return res.status(200).send({
      "status": 200,
      "data": offices
    });
  },
  getOneOffice(req, res) {
    const office = OfficeModel.findOne(req.params.id);
    if (!office) {
      return res.status(404).send({ message: 'Office not found' });
    }
    return res.status(200).send({
      "status": 200,
      "data": office
    });
  },
};

export default Office;
