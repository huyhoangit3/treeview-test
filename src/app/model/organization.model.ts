export interface Organization {
  id: number,
  name: string,
  path: string,
  children: Organization[]
}