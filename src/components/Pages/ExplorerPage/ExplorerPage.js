import { Form } from 'antd';
import { FullSizeBox } from '../../Core';
import { getImage, useExplorerStore } from './utils';
import { ExplorerTopBar } from './ExplorerTopBar';
import { Panorama } from './Panorama';

const ExplorerPage = () => {
  const [form] = Form.useForm();
  const { apartments } = useExplorerStore();
  const date = form.getFieldValue('date');
  const apartmentName = form.getFieldValue('apartmentName');
  const image = getImage({ date, apartmentName, apartments });
  console.log({ image, date, apartmentName });
  return apartments && (
    <FullSizeBox flexDirection="column">
      <FullSizeBox height={35}>
        <ExplorerTopBar form={form} apartments={apartments} />
      </FullSizeBox>
      <FullSizeBox flex={1}>
        {image && <Panorama url={image.url} id={image.id} />}
      </FullSizeBox>
    </FullSizeBox>
  );
};

export { ExplorerPage };
