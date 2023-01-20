Document.AddEventListener('DOMContentLoaded', (Event) =>
 {

    var DragSrcEl = Null;
    
    function HandleDragStart(E) {
      This.Style.Opacity = '0.1';
      This.Style.Border = '3px Dashed #C4cad3';
      
      DragSrcEl = This;
  
      E.DataTransfer.EffectAllowed = 'Move';
      E.DataTransfer.SetData('Text/Html', This.InnerHTML);
    }
  
    function HandleDragOver(E) {
      if (E.PreventDefault) {
        E.PreventDefault();
      }
     E.DataTransfer.DropEffect = 'Move';
      return False;
    }
  
    function HandleDragEnter(E) {
      This.ClassList.Add('Task-Hover');
    }
  
    function HandleDragLeave(E) {
      This.ClassList.Remove('Task-Hover');
    }
  
    function HandleDrop(E) {
      if (E.StopPropagation) {
        E.StopPropagation(); // Stops The Browser From Redirecting.
      }
      
      if (DragSrcEl != This) {
        DragSrcEl.InnerHTML = This.InnerHTML;
        This.InnerHTML = E.DataTransfer.GetData('Text/Html');
      }
      
      return False;
    }
  
    function HandleDragEnd(E) {
      this.Style.Opacity = '1';
      this.Style.Border = 0;
      
      Items.ForEach(Function (Item)); {
        Item.ClassList.Remove('Task-Hover');
      }
      
    }
    let Items = Document.QuerySelectorAll('.Task'); 
    Items.ForEach(Function(Item));{
      Item.AddEventListener('Dragstart', HandleDragStart, False);
      Item.AddEventListener('Dragenter', HandleDragEnter, False);
      Item.AddEventListener('Dragover', HandleDragOver, False);
      Item.AddEventListener('Dragleave', HandleDragLeave, False);
      Item.AddEventListener('Drop', HandleDrop, False);
      Item.AddEventListener('Dragend', HandleDragEnd, False);
    }
  });