export interface Repository<X extends { id: unknown }> {
  getAll(): Promise<X[]>;
  getById(_id: X['id']): Promise<X>;
  // eslint-disable-next-line no-unused-vars
  search({ key, value }: { key: keyof X; value: unknown }): Promise<X[]>;
  create(_newItem: Omit<X, 'id'>): Promise<X>;
  update(_id: X['id'], _updatedItem: Partial<X>): Promise<X>;
  addFriend(_id: X['id'], _updatedItem: Partial<X>): Promise<X>;
  addEnemy(_id: X['id'], _updatedItem: Partial<X>): Promise<X>;
  // Temp delete(_id: X['id']): Promise<void>;
}
