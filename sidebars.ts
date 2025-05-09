import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  kungfupandasSidebar: [
    
      
        {
          type: 'doc',
          id: 'kungfupandas/gioithieu'
        },
        {
          type: 'category',
          label: 'Chương 1: Cấu trúc dữ liệu',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/DataStructure/Introduction',
              label: 'Giới thiệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/DataStructure/Series',
              label: 'Series'
            },
            {
              type: 'doc',
              id: 'kungfupandas/DataStructure/DataFrame',
              label: 'DataFrame'
            },
            {
              type: 'doc',
              id: 'kungfupandas/DataStructure/DataType',
              label: 'DataType'
            }
          ]
        },
        {
          type: 'category',
          label: 'Chương 2: Nhập xuất dữ liệu',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/IO/Introduction',
              label: 'Giới thiệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/IO/Csv_Tsv',
              label: 'CSV và TSV'
            },
            {
              type: 'doc',
              id: 'kungfupandas/IO/Excel',
              label: 'Excel'
            },
            {
              type: 'doc',
              id: 'kungfupandas/IO/Json',
              label: 'JSON'
            }
          ]
        },
        {
          type: 'category',
          label: 'Chương 3: Các hàm và phương thức cơ bản',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/Fundamental_Function/Introduction',
              label: 'Giới thiệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Fundamental_Function/Info',
              label: 'Các hàm mô tả'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Fundamental_Function/Others',
              label: 'Các hàm và phương thức khác'
            }
          ]
        },
        {
          type: 'category',
          label: 'Chương 4: Chọn lọc và lọc dữ liệu',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/SelectingAndFiltering/Introduction',
              label: 'Giới thiệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/SelectingAndFiltering/Select',
              label: 'Chọn dữ liệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/SelectingAndFiltering/Filtering',
              label: 'Lọc dữ liệu'
            }
          ]
        },
        {
          type: 'category',
          label: 'Chương 5: Tính toán dữ liệu trên từng phần tử',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/Loop/Introduction',
              label: 'Giới thiệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Loop/Vectorization',
              label: 'Vectorization'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Loop/Apply_Function',
              label: 'Sử dụng apply'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Loop/Iterator',
              label: 'Sử dụng iterator'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Loop/Compare_Loop_Function',
              label: 'Tối ưu hóa tốc độ lặp'
            }
          ]
        },
        {
          type: 'category',
          label: 'Chương 6: Kết nối giữa các DataFrame',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/Merge_Join_Concat/Introduction',
              label: 'Giới thiệu'
            }
          ]
        },
        {
          type: 'category',
          label: 'Chương 7: Groupby trong Pandas',
          items: [
            {
              type: 'doc',
              id: 'kungfupandas/Groupby-Aggregation/Introduction',
              label: 'Giới thiệu'
            },
            {
              type: 'doc',
              id: 'kungfupandas/Groupby-Aggregation/Groupby-base',
              label: 'Groupby cơ bản'
            },
           
          ]
        }
      ],
  mathSidebar: [
        {
          type: 'doc',
          id: 'math/gioithieu',
        }
      ],
  boostSidebar: [
      {
        type: 'doc',
        id: 'boost/phan-tich-dinh-vi-thuong-hieu'
      }
  ]
};

export default sidebars;
