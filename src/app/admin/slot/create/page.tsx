"use client";

import ActionBar from "@/components/ui/ActionBar/ActionBar";
import Form from "@/components/ui/Form/Form";
import { Button, Col, Row, message } from "antd";

import AvailableServiceField from "@/components/ui/Form/AvailableServiceField";
import FormTimePicker from "@/components/ui/Form/FormTimePicker";
import ServiceTeamField from "@/components/ui/Form/ServiceTeamField";
import { useAddSlotMutation } from "@/redux/api/slotsApi";
import { responseMessage } from "@/utils/responseMessage";

const CreateSlotPage = () => {
  const [addSlot, { isLoading: slotLoading }] = useAddSlotMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await addSlot(data);

      responseMessage(res, "Slot created Successfully");
    } catch (err: any) {
      console.log(err);

      message.error(err.message || "Something went wrong try again");
    }
  };

  return (
    <div className="px-12 py-6">
      <ActionBar title="Create Slot for available Service"></ActionBar>
      <Form submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormTimePicker name="startTime" label="Start time" />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <AvailableServiceField
              name="availableServiceId"
              label="Select Service"
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <ServiceTeamField
              name="serviceTeamId"
              label="Select Service Team"
            />
          </Col>
        </Row>

        <Button
          type="primary"
          htmlType="submit"
          disabled={slotLoading}
          className="bg-green-600"
        >
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateSlotPage;
