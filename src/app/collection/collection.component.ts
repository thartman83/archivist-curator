import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CollectionService } from '../collection.service';
import { ICollection } from '../collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  collection: ICollection | undefined;
  loading: boolean = true;

  constructor(private route: ActivatedRoute,
              private collectionService: CollectionService) {

    const collectionId = Number(this.route.snapshot.paramMap.get('collectionid'));
    this.collectionService.getCollection(collectionId).subscribe(
      (collection: ICollection) => {
        this.collection = collection
      });
  }
}
