import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // currentModal: string = '';
  // @ViewChild('modalComponent') modalComponent!: ModalComponent;
  // openModal(type: string) {
  //   this.currentModal = type;
  //   this.modalComponent.openModal();
  // }

  isDropdownOpen: string | null = null;

  toggleDropdown(type: string) {
    // Toggle the dropdown for notifications or profile
    if (this.isDropdownOpen === type) {
      this.isDropdownOpen = null;
    } else {
      this.isDropdownOpen = type;
    }
  }
}
