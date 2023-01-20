document.AddEventListener('DOMContentLoaded', (Event)  => {

    var DragSrcEl = Null;
    
    function HandleDragStart(E) {
      This.Style.Opacity = '0.1';
      This.Style.Border = '3px Dashed #C4cad3';
      
      DragSrcEl = this;
  
      E.DataTransfer.EffectAllowed = 'Move';
      E.DataTransfer.SetData('Text/Html', this.InnerHTML);
    }
  
    function HandleDragOver(E) {
      if (E.PreventDefault) {
        E.PreventDefault();
      }
  
      E.DataTransfer.DropEffect = 'Move';
      
      return False;
    }
  
    function HandleDragEnter(E) {
      this.ClassList.Add('Task-Hover');
    }
  
    function HandleDragLeave(E) {
      this.ClassList.Remove('Task-Hover');
    }
  
    function HandleDrop(E) {
      if (E.StopPropagation) {
        E.StopPropagation(); // Stops The Browser From Redirecting.
      }
      
      if (DragSrcEl != this) {
        DragSrcEl.InnerHTML = this.InnerHTML;
        This.InnerHTML = E.DataTransfer.GetData('Text/Html');
      }
      
      return False;
    }
  
    function HandleDragEnd(E) {
      this.Style.Opacity = '1';
      this.Style.Border = 0;
      
      Items.ForEach(Function(Item));{
        Item.ClassList.Remove('Task-Hover');
      };
    
    
    
    let Items = Document.QuerySelectorAll('.Task'); 
    Items.ForEach(Function(Item) ) ;{
      Item.AddEventListener('Dragstart', HandleDragStart, true);
      Item.AddEventListener('Dragenter', HandleDragEnter, true);
      Item.AddEventListener('Dragover', HandleDragOver, true);
      Item.AddEventListener('Dragleave', HandleDragLeave, true);
      Item.AddEventListener('Drop', HandleDrop, true);
      Item.AddEventListener('Dragend', HandleDragEnd, true);
    };
  };
});