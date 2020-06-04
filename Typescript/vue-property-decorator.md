# vue-property-decorator 使用指南

## @watch

```typescript
  import {Vue, Component, Watch} from 'vue-property-decorator';
  @Component
  export default class ComponentName extends Vue{
    @Watch('value', { immediate: true})
    onValueChanged(val: string[]) {
      this.$emit('update:value',val)
    }
  }
  }
```

