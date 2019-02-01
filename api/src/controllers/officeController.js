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
  getOneOffice(req, res) {
    const office = OfficeModel.findOne(req.params.id);
    if (!office) {
      return res.status(404).send({ message: 'Office not found' });
    }
    return res.status(200).send(office);
  },
};

export default Office;
