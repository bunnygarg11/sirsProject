import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import { Day, WorkWeek, Month, ScheduleComponent, ResourcesDirective, ResourceDirective, ViewsDirective, ViewDirective, Inject, TimelineViews, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import * as dataSource from './datasource.json';

const styles = theme => ({
    layoutRoot: {}
});

class Agenda extends Component {
    
    constructor() {
        super(...arguments);
        this.data = extend([], dataSource.resourceConferenceData, null, true);
        this.resourceData = [
            { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
            { Text: 'Robert', Id: 2, Color: '#357cd2' },
            { Text: 'Laura', Id: 3, Color: '#7fa900' }
        ];
    }
    getEmployeeName(value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    }
    getEmployeeImage(value) {
        let resourceName = this.getEmployeeName(value);
        return resourceName.replace(' ', '-').toLowerCase();
    }
    getEmployeeDesignation(value) {
        let resourceName = this.getEmployeeName(value);
        return (resourceName === 'Margaret') ? 'Sales Representative' : (resourceName === 'Robert') ?
            'Vice President, Sales' : 'Inside Sales Coordinator';
    }
    monthEventTemplate(props) {
        return (<div className="subject">{props.Subject}</div>);
    }
    resourceHeaderTemplate(props) {
        return (<div className="template-wrap"><div className={"resource-image " + this.getEmployeeImage(props)}></div>
      <div className="resource-details"><div className="resource-name">{this.getEmployeeName(props)}</div>
        <div className="resource-designation">{this.getEmployeeDesignation(props)}</div></div></div>);
    }

    render()
    {
        // const {classes} = this.props;
        // return (
        //     <FusePageSimple
        //         classes={{
        //             root: classes.layoutRoot
        //         }}
        //         header={
        //             <div className="p-24"><h4>Header</h4></div>
        //         }
        //         contentToolbar={
        //             <div className="px-24"><h4>Content Toolbar</h4></div>
        //         }
        //         content={
        //             <div className="p-24">
        //                 <h4>Contentlakfhsadjklkljasbdj</h4>
        //                 <br/>
        //                 <DemoContent/>
        //             </div>
        //         }
        //     />
        // )
        return (
            <div className='schedule-control-section'>
                <div className='col-lg-12 control-section'>
                  <div className='control-wrapper'>
                    <ScheduleComponent cssClass='group-editing' width='100%' height='650px' selectedDate={new Date(2018, 5, 5)} currentView='Day' resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)} eventSettings={{
                    dataSource: this.data,
                    fields: {
                        subject: { title: 'Conference Name', name: 'Subject' },
                        description: { title: 'Summary', name: 'Description' },
                        startTime: { title: 'From', name: 'StartTime' },
                        endTime: { title: 'To', name: 'EndTime' }
                    }
                }} group={{ allowGroupEdit: true, resources: ['Conferences'] }} timeScale={{ interval: 60, slotCount: 1 }} >
                      <ResourcesDirective>
                        <ResourceDirective field='ConferenceId' title='Attendees' name='Conferences' allowMultiple={true} dataSource={this.resourceData} textField='Text' idField='Id' colorField='Color'>
                        </ResourceDirective>
                      </ResourcesDirective>
                      <ViewsDirective>
                        <ViewDirective option='Day'/>
                        {/* <ViewDirective option='WorkWeek'/> */}
                        {/* <ViewDirective option='Month' eventTemplate={this.monthEventTemplate.bind(this)}/> */}
                        {/* <ViewDirective option='TimelineWeek'/> */}
                      </ViewsDirective>
                      <Inject services={[Day, /*WorkWeek, Month, TimelineViews,*/ Resize, DragAndDrop]}/>
                    </ScheduleComponent>
                  </div>
                </div>
              </div>
            )
    }
}

export default withStyles(styles, {withTheme: true})(Agenda);