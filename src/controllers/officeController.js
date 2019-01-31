import OfficeModel from '../models/officeModel';

const Office = {
  createOffice(req, res) {
    if (!req.body.officeName && !req.body.officeType) {
      return res.status(400).send({ message: 'Office name and type fields are required' });
    }
    const office = OfficeModel.create(req.body);
    return res.status(201).send(office);
  },
  getAllOffice(req, res) {
    const offices = OfficeModel.findAll();
    return res.status(200).send(offices);
  },
};

export default Office;
