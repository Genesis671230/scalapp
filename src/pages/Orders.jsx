import React, { useEffect, useState } from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { ordersData, ContextMenuIttems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [apiData, setapiData] = useState([]);

  const linkit = (props) => {
    const objRow = {
      id: props.id,
      appName: props.appName,

      BillingIssues: props.BillingIssues,
      Refundevents: props.Refundevents,
      RefundMoney: props.RefundMoney,
      MRR: props.MRR,
      ARR: props.ARR,
      ARRPPU: props.ARRPPU,
      ActiveSubscribers: props.ActiveSubscribers,
      NewSubscribers: props.NewSubscribers,
      Subcriptionrenewalscancelled: props.Subcriptionrenewalscancelled,
      expiredsubcriptions: props.expiredsubcriptions,
      activeTrials: props.activeTrials,
      newTrials: props.newTrials,
      trialrenewalscancelled: props.trialrenewalscancelled,
      expiredtrials: props.expiredtrials,
    };

    return (
      <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
        <Link to="/appdetails" state={{ objRow }}>
          {' '}
          {props.id}{' '}
        </Link>
      </div>
    );
  };

  // const ordersData = [
  //   {
  //     id: 10248,
  //     appName: 'SHOPIRED',

  //     BillingIssues: 32.38,
  //     Refundevents: 'Fresh Tomato',
  //     RefundMoney: 'USA',
  //     MRR: '456',
  //     ARR: '1020',
  //     ARRPPU: '500',
  //     ActiveSubscribers: '800',
  //     NewSubscribers: '600',
  //     Subcriptionrenewalscancelled: '300',
  //     expiredsubcriptions: '200',
  //     activeTrials: '700',
  //     newTrials: '650',
  //     trialrenewalscancelled: '700',
  //     expiredtrials: '400',
  //   },
  // ];

  const ordersGrid = [
    {
      field: 'id',
      headerText: 'Details',
      template: linkit,
      width: '150',
      editType: 'dropdownedit',
      textAlign: 'Center',
    },
    {
      field: 'appName',
      headerText: 'App Name',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'BillingIssues',
      headerText: 'Billing Issues',
      format: 'C2',
      textAlign: 'Center',
      editType: 'numericedit',
      width: '150',
    },

    {
      field: 'Refundevents',
      headerText: 'Refundevents',
      width: '120',
      textAlign: 'Center',
    },

    {
      field: 'RefundMoney',
      headerText: 'Refund Money',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'MRR',
      headerText: 'MRR',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'ARR',
      headerText: 'ARR',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'ARRPPU',
      headerText: 'ARRPPU',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'ActiveSubscribers',
      headerText: 'Active Subscribers',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'NewSubscribers',
      headerText: 'New Subscribers',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'Subcriptionrenewalscancelled',
      headerText: 'Subcription Renewals cancelled',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'expiredsubcriptions',
      headerText: 'expiredsubcriptions',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'activeTrials',
      headerText: 'Active Trials',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'newTrials',
      headerText: 'New Trials',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'trialrenewalscancelled',
      headerText: 'Trial Renewals Cancelled',
      width: '150',
      textAlign: 'Center',
    },
    {
      field: 'expiredtrials',
      headerText: 'Expired Trials',
      width: '150',
      textAlign: 'Center',
    },
  ];

  useEffect(() => {
    const getTableData = async () => {
      const fetchData = await fetch('https://144.126.220.228:8080/gettables');
      const dataAPI = await fetchData.json();
      setapiData(dataAPI);
    };
    getTableData();
  }, []);
  console.log('we have data from api', apiData);

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Apps" />
      {apiData && (
        <div>
          <GridComponent
            id="gridcomp"
            dataSource={apiData}
            allowPaging
            allowSorting
            width="auto"
          >
            <ColumnsDirective>
              {ordersGrid.map((item, index) => {
                return <ColumnDirective key={index} {...item} />;
              })}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                ExcelExport,
                Edit,
                PdfExport,
                Page,
              ]}
            />
          </GridComponent>
        </div>
      )}
    </div>
  );
};

export default Orders;
