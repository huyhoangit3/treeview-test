import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Organization } from '../model/organization.model';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  constructor(private http: HttpClient) {}

  getOrganizations(orgId: number): Promise<Organization> {
    return firstValueFrom(
      this.http.get<Organization>(
        `http://localhost:8080/api/organization/${orgId}`
      )
    );
  }
}
