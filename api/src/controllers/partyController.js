import PartyModel from '../models/partyModel';

const Party = {
  createParty(req, res) {
    if (!req.body.partyName && !req.body.partyAddress && !req.body) {
      return res.status(400).send({ error: 'party name and address fields are required' });
    }
    const party = PartyModel.create(req.body);
    return res.status(201).send({
      "status": 201,
      "data": [party]
    });
  },



  getAllParty(req, res) {
    const parties = PartyModel.findAll();
    return res.status(200).send({
      "status": 200,
      "data": [parties]
    });
  },

  getOneParty(req, res) {
    const party = PartyModel.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    return res.status(200).send({
      "status": 200,
      "data": [party]
    });
  },

  updateParty(req, res) {
    const party = PartyModel.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    const updatedParty = PartyModel.update(req.params.id, req.body);
    return res.status(201).send({
      "status": 201,
      "data": [updatedParty]
    });
  },

  deleteParty(req, res) {
    const party = PartyModel.findOne(req.params.id);
    if (!party) {
      return res.status(404).send({ message: 'Party not found' });
    }
    const partyD = PartyModel.delete(req.params.id);
    return res.status(204).send({
      "status": 204,
      "data": [partyD]
    });
  },
};

export default Party;
