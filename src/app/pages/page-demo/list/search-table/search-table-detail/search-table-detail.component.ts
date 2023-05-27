import { ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PageHeaderType, PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { fnCheckForm } from '@utils/tools';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-search-table-detail',
  templateUrl: './search-table-detail.component.html',
  standalone: true,
  imports: [PageHeaderComponent, NzInputModule, FormsModule, NzDividerModule, NzFormModule, ReactiveFormsModule, NzGridModule]
})
export class SearchTableDetailComponent implements OnInit, OnDestroy {
  pageHeaderInfo: Partial<PageHeaderType> = {
    title: '详情',
    // desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
    breadcrumb: ['首页', '列表页', '查询表格', '详情']
  };
  validateForm!: FormGroup;
  name = '';
  backUrl = '/default/page-demo/list/search-table';
  destroyRef = inject(DestroyRef);

  constructor(private routeParam: ActivatedRoute, public cdr: ChangeDetectorRef, private fb: FormBuilder) {}

  initForm(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (!fnCheckForm(this.validateForm)) {
      return;
    }
  }

  _onReuseDestroy(): void {
    console.log('tab销毁了，调用_OnReuseDestroy');
  }

  ngOnInit(): void {
    this.initForm();
    this.routeParam.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(res => {
      this.name = res['name'];
      this.validateForm.get('userName')?.setValue(this.name);
    });
  }

  ngOnDestroy(): void {
    console.log('组件实力销毁，调用ngOnDestroy');
  }
}
