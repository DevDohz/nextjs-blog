export class Review {
  public "@id"?: string;

  constructor(
    _id?: string,
    public body?: string,
    public rating?: number,
    public book?: any,
    public author?: string,
    public publicationDate?: Date
  ) {
    this["@id"] = _id;
  }
}
