import uuid from 'uuid';

class Office {
  constructor() {
    this.offices = [];
  }

  create(data) {
    const newOffice = {
      id: uuid.v4(),
      officeName: data.officeName || '',
      officeType: data.officeType || '',
    };
    this.offices.push(newOffice);
    return newOffice;
  }

  findAll() {
    return this.offices;
  }

}

export default new Office();
