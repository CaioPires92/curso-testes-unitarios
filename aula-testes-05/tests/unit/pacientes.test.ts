import { v4 as uuidv4 } from 'uuid';
import { generateProtocolForPacient } from 'protocols-generator';

jest.mock('uuid', () => ({
  v4: () => {return "valor simulado no mock"},
}));

  it('generates a protocol for a patient', () => {
    const protocol = generateProtocolForPacient('John', 'Doe', true);

    expect(protocol).toEqual({
      priority: true,
      date: expect.any(Date),
      pacient: 'John Doe',
      protocol: 'valor simulado no mock',
    });
  });
