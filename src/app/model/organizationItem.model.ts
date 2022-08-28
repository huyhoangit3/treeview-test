export interface OrganizationItem {
  text: string,
  value: string,
  id?: number,
  children?: OrganizationItem[]
}