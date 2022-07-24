import React, { useEffect, useState } from 'react';
import { BsBoxSeam, BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {
  earningData,
  ecomPieChartData,
  SparklineAreaData,
} from '../data/dummy';
import { checksContext } from '../context/ContextProvider';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { FiBarChart } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from '@syncfusion/ej2-react-charts';

const Ecommerce = () => {
  const { currentColorSelected } = checksContext();
  const [apiData, setapiData] = useState();
  const [total, settotal] = useState({});

  const getTableData = async () => {
    const fetchData = await fetch('https://appmeterics-chnoumankahoot.vercel.app/apps');
    const dataAPI = await fetchData.json();
    setapiData(dataAPI);
    console.log(dataAPI);

    const filterAndSave = () => {
      const tEarnings = {
        ActiveSubscribers: null,
        NewSubscribers: null,
        expiredsubcriptions: null,
        Subcriptionrenewalscancelled: null,
        activeTrials: null,
        newTrials: null,
        expiredtrials: null,
        RefundMoney: null,
        Refundevents: null,
        BillingIssues: null,
        MRR: null,
        ARR: null,
        ARRPPU: null,
      };
      dataAPI?.map((item) => {
        tEarnings.ActiveSubscribers += item.ActiveSubscribers;
        tEarnings.NewSubscribers += item.NewSubscribers;
        tEarnings.expiredsubcriptions += item.expiredsubcriptions;
        tEarnings.Subcriptionrenewalscancelled +=
          item.Subcriptionrenewalscancelled;
        tEarnings.activeTrials += item.activeTrials;
        tEarnings.newTrials += item.newTrials;
        tEarnings.expiredtrials += item.expiredtrials;
        tEarnings.RefundMoney += item.RefundMoney;
        tEarnings.Refundevents += item.Refundevents;
        tEarnings.BillingIssues += item.BillingIssues;
        tEarnings.MRR += item.MRR;
        tEarnings.ARR += item.ARR;
        tEarnings.ARRPPU += item.ARRPPU;
      });
      settotal(tEarnings);
    };

    filterAndSave();
  };

  useEffect(() => {
    getTableData();
  }, []);

  const data20 = [
    {
      x: 'ActiveSubscribers',
      y: total?.ActiveSubscribers,
      text: 'ActiveSubscribers',
    },
    {
      x: 'NewSubscribers',
      y: total?.NewSubscribers,
      text: 'NewSubscribers',
    },
    { x: 'New Trials', y: total?.newTrials, text: 'New Trials' },
    { x: 'Active Trials', y: total?.activeTrials, text: 'Active Trials' },
    { x: 'ARRPPU', y: total?.ARRPPU, text: 'ARRPPU' },
    {
      x: 'Expired Subcriptions',
      y: total?.expiredsubcriptions,
      text: 'expiredsubcriptions',
    },
    {
      x: 'MRR',
      y: total?.MRR,
      text: 'Monthly Revenue',
    },
    {
      x: 'Trial Renewals Cancelled',
      y: total?.trialrenewalscancelled,
      text: 'Trail Renewal Cancelled',
    },
    {
      x: 'ARRPPU',
      y: total?.ARRPPU,
      text: 'ARRPPU',
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="flex flex-wrap justify-evenly w-2/3 gap-1 m-3 items-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/3 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{ color: 'black', backgroundColor: 'purple' }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              <MdOutlineSupervisorAccount />
            </button>

            <p className="mt-3">
              <span className="text-lg font-semibold">
                {total.NewSubscribers}
              </span>
            </p>

            <p className="mt-1 text-sm text-gray-400">New Subscribers </p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/3 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{ color: 'black', backgroundColor: 'yellow' }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              <BsBoxSeam />
            </button>

            <p className="mt-3">
              <span className="text-lg font-semibold">
                {total.ActiveSubscribers}
              </span>
            </p>

            <p className="mt-1 text-sm text-gray-400 ">Active subscribers </p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/3 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{ color: 'black', backgroundColor: 'green' }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              <FiBarChart />
            </button>

            <p className="mt-3">
              <span className="text-lg font-semibold">
                {total.activeTrials}
              </span>
            </p>

            <p className="mt-1 text-sm text-gray-400">Active Trials </p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/3 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{ color: 'black', backgroundColor: 'skyblue' }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              <MdOutlineSupervisorAccount />
            </button>

            <p className="mt-3">
              <span className="text-lg font-semibold">{total.ARRPPU}</span>
            </p>

            <p className="mt-1 text-sm text-gray-400">ARRPPU </p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-1/3 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{ color: 'black', backgroundColor: 'orange' }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              <MdOutlineSupervisorAccount />
            </button>

            <p className="mt-3">
              <span className="text-lg font-semibold">{total.RefundMoney}</span>
            </p>

            <p className="mt-1 text-sm text-gray-400">RefundMoney </p>
          </div>
        </div>

        <div>
          <div>
            <AccumulationChartComponent
              id="pie-chart"
              title="Pixster Studio Statistics"
              legendSettings={{ visible: false }}
              enableSmartLabels={true}
              enableAnimation={false}
              center={{ x: '50%', y: '50%' }}
              tooltip={{
                enable: true,
                format: '${point.x} : <b>${point.y}</b>',
              }}
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
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
