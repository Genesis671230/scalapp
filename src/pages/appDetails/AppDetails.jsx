import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
  ColumnSeries,
  PieSeries,
} from '@syncfusion/ej2-react-charts';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
  Category,
  DataLabel,
} from '@syncfusion/ej2-react-charts';
import { checksContext } from '../../context/ContextProvider';

const AppDetails = () => {
  const { state } = useLocation();

  const { currentMode } = checksContext();

  const [propData, setpropData] = useState();

  const [permit, setpermit] = useState(false);

  useEffect(() => {
    setpropData(state.objRow);
    setpermit(true);
  }, []);
  console.log(propData);

  const data1 = [
    {
      x: 'ActiveSubscribers',
      y: propData?.ActiveSubscribers,
      text: 'ActiveSubscribers',
    },
    {
      x: 'NewSubscribers',
      y: propData?.NewSubscribers,
      text: 'NewSubscribers',
    },
    { x: 'New Trials', y: propData?.newTrials, text: 'New Trials' },
    { x: 'Active Trials', y: propData?.activeTrials, text: 'Active Trials' },
    { x: 'ARRPPU', y: propData?.ARRPPU, text: 'ARRPPU' },
    {
      x: 'Expired Subcriptions',
      y: propData?.expiredsubcriptions,
      text: 'expiredsubcriptions',
    },
    {
      x: 'MRR',
      y: propData?.MRR,
      text: 'Monthly Revenue',
    },
    {
      x: 'Trial Renewals Cancelled',
      y: propData?.trialrenewalscancelled,
      text: 'Trail Renewal Cancelled',
    },
    {
      x: 'BillingIssues',
      y: propData?.BillingIssues,
      text: 'Billing Issues',
    },
    {
      x: 'ARRPPU',
      y: propData?.ARRPPU,
      text: 'Annual Revenue Per Unit',
    },
  ];

  const data20 = [
    {
      x: 'ActiveSubscribers',
      y: propData?.ActiveSubscribers,
      text: 'ActiveSubscribers',
    },
    {
      x: 'NewSubscribers',
      y: propData?.NewSubscribers,
      text: 'NewSubscribers',
    },
    { x: 'New Trials', y: propData?.newTrials, text: 'New Trials' },
    { x: 'Active Trials', y: propData?.activeTrials, text: 'Active Trials' },
    { x: 'ARRPPU', y: propData?.ARRPPU, text: 'ARRPPU' },
    {
      x: 'Expired Subcriptions',
      y: propData?.expiredsubcriptions,
      text: 'expiredsubcriptions',
    },
    {
      x: 'MRR',
      y: propData?.MRR,
      text: 'Monthly Revenue',
    },
    {
      x: 'Trial Renewals Cancelled',
      y: propData?.trialrenewalscancelled,
      text: 'Trail Renewal Cancelled',
    },
    {
      x: 'ARRPPU',
      y: propData?.ARRPPU,
      text: 'ARRPPU',
    },
  ];

  return (
    <div>
      <div>
        <AccumulationChartComponent
          id="pie-chart"
          title="Mobile Browser Statistics"
          legendSettings={{ visible: false }}
          enableSmartLabels={true}
          enableAnimation={false}
          center={{ x: '50%', y: '50%' }}
          tooltip={{ enable: true, format: '${point.x} : <b>${point.y}</b>' }}
          l
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationTooltip,
              AccumulationDataLabel,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={data20}
              name="Browser"
              xName="x"
              yName="y"
              explode={true}
              explodeOffset="10%"
              explodeIndex={0}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font: {
                  fontWeight: '600',
                },
              }}
              radius="100%"
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>

      {data1 && permit && (
        <div className="p-2">
          <ChartComponent
            id="charts"
            style={{ textAlign: 'center' }}
            primaryXAxis={{
              valueType: 'Category',
              interval: 1,
              majorGridLines: { width: 0 },
            }}
            load={() => {
              setTimeout(() => {
                console.log(permit);
              }, 1000);
            }}
            primaryYAxis={{
              majorGridLines: { width: 0 },
              majorTickLines: { width: 0 },
              lineStyle: { width: 0 },
              labelStyle: { color: 'transparent' },
            }}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            width="90%"
            title="App Statistic Performance"
            loaded={() => {
              setTimeout(() => {
                setpermit(true);
              }, 1000);
            }}
          >
            <Inject services={[ColumnSeries, Tooltip, Category, DataLabel]} />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={data1}
                xName="x"
                yName="y"
                name="App Details"
                type="Column"
                marker={{
                  dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                  },
                }}
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      )}

      {data1 && permit && (
        <div className="p-10">
          <AccumulationChartComponent
            id="pyramid-chart"
            width="90%"
            title="App Data"
            legendSettings={{
              visible: false,
            }}
            load={() => {
              setTimeout(() => {
                console.log(permit);
              }, 1000);
            }}
            tooltip={{
              enable: true,
              format: '${point.x} : <b>${point.y} </b>',
            }}
            loaded={() => {
              setTimeout(() => {
                setpermit(true);
              }, 1000);
            }}
          >
            <Inject
              services={[
                AccumulationDataLabel,
                AccumulationTooltip,
                PyramidSeries,
                AccumulationLegend,
                AccumulationSelection,
              ]}
            />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name="App Details"
                dataSource={data1}
                xName="x"
                yName="y"
                type="Pyramid"
                width="45%"
                height="80%"
                neckWidth="15%"
                gapRatio={0.03}
                explode={true}
                emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                dataLabel={{
                  visible: true,
                  position: 'Inside',
                  name: 'text',
                }}
              ></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
