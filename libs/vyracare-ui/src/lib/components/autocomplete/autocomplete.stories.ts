import type { Meta, StoryObj } from '@storybook/angular';
import { VcAutocompleteComponent } from './autocomplete.component';
const meta: Meta<VcAutocompleteComponent> = {
  title: 'Forms/Autocomplete', component: VcAutocompleteComponent, tags: ['autodocs'],
  args: { id: 'professional', label: 'Funcionario', placeholder: 'Pesquise por nome, email ou telefone', options: [
    { value: '1', label: 'Maria Silva', description: 'maria@vyracare.com · (11) 99999-0000' },
    { value: '2', label: 'Joao Souza', description: 'joao@vyracare.com · (11) 98888-0000' }
  ] }
};
export default meta;
type Story = StoryObj<VcAutocompleteComponent>;
export const Default: Story = {};
export const Loading: Story = { args: { loading: true } };
export const Error: Story = { args: { error: 'Nao foi possivel pesquisar.' } };
